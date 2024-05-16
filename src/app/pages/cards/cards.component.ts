import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ArrowBackComponent } from 'app/components/arrow-back/arrow-back.component';
import { EmptyComponent } from 'app/components/empty/empty.component';
import { ErrorComponent } from 'app/components/error/error.component';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { icons } from 'app/constants/icons';
import { MtgService } from 'app/services/mtg.service';
import { Card } from 'app/types/Card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    LoadingComponent,
    ErrorComponent,
    EmptyComponent,
    ArrowBackComponent,
    MatIconModule
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  cards!: Card[];
  error = '';

  constructor(
    private activedRoute: ActivatedRoute,
    private mtgService: MtgService,
    private router: Router,
  ) {
    const setId = this.activedRoute.snapshot.paramMap.get('setId');
    if (!setId) {
      this.router.navigate(['/']);
      return;
    }

    this.handleGetCards(setId);
  }

  handleGoBack() {
    window.history.back()
  }

  private handleGetCards(setId: string, cards: Card[] = []) {
    const subscriber = this.mtgService.listCards(setId).subscribe({
      next: (data) => {
        const cardsData = data.cards.reduce(
          this.cardsDataAccomulator(cards),
          [] as Card[],
        );
        const totalCards = [...cards, ...cardsData];

        if (totalCards.length >= 30) {
          this.cards = totalCards.slice(0, 30);
        } else {
          this.handleGetCards(setId, totalCards);
        }

        subscriber.unsubscribe();
      },
      error: (err) => {
        this.error = err.error.error;
      },
    });
  }

  private cardsDataAccomulator = (currentCards: Card[]) => (acc: Card[], card: Card) => {
    const alreadyAdd = currentCards.some(x => x.name === card.name);

    if (card.types.includes('Creature') && !alreadyAdd) {
      acc.push({
        ...card,
        text: this.handleReplaceToIcons(card.text),
        manaCost: this.handleReplaceToIcons(card.manaCost),
      });
    }
    return acc;
  };

  private handleReplaceToIcons(text: string): string {
    const match = text?.match(/{.}/g);
    let newString = text;

    match?.forEach((x) => {
      const value = x[1];
      if ('123456789'.includes(value)) {
        newString = newString.replace(x, `<span>${value}</span>`);
      } else {
        const icon = icons[value as keyof typeof icons];
        if (icon) {
          newString = newString.replace(
            x,
            `<img src="${icon}" alt="icone de indentificacao" />`,
          );
        }
      }
    });

    return newString;
  }

}
