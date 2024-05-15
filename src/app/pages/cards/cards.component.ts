import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmptyComponent } from 'app/components/empty/empty.component';
import { ErrorComponent } from 'app/components/error/error.component';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { icons } from 'app/constants/icons';
import { MtgService } from 'app/services/mtg.service';
import { Card } from 'app/types/Card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [LoadingComponent, ErrorComponent, EmptyComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards!: Card[]
  error = '';
  test = '<img src="assets/B.png" />'

  constructor(
    private activedRoute: ActivatedRoute,
    private mtgService: MtgService,
    private router: Router
  ) {
    const setId = this.activedRoute.snapshot.paramMap.get('setId')
    if (!setId) {
      this.router.navigate(['/'])
      return
    }

    this.handleGetCards(setId)
  }

  private handleGetCards(setId: string){
    this.mtgService.listCards(setId).subscribe({
      next: data => {
       const filteredCards = data.cards.filter(x => x.types.includes("Creature"));
       const cardsWithIcons = filteredCards.map(x => ({
         ...x,
         text: this.handleReplaceToIcons(x.text),
         manaCost: this.handleReplaceToIcons(x.manaCost),
       }))
       this.cards = cardsWithIcons
      },
      error: (err) => {
        this.error = err.error.error
      }
    })
  }

  private handleReplaceToIcons(text: string):string {
    const match = text?.match(/{.}/g)
    let newString = text

    match?.forEach(x => {
      const value = x[1]
      if ('123456789'.includes(value)) {
        newString = newString.replace(x, `<span>${value}</span>`)
      } else {
        const icon = icons[value as keyof typeof icons]
        if (icon) {
          newString = newString.replace(x, `<img src="${icon}" alt="icone de indentificacao" />`)
        }
      }
    })

    return newString
  }

}
