import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ErrorComponent } from 'app/components/error/error.component';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { MtgService } from 'app/services/mtg.service';
import { Card } from 'app/types/Card';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [LoadingComponent, ErrorComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  cards!: Card[]
  error = ''

  constructor(
    private activedRoute: ActivatedRoute,
    private mtgService: MtgService,
    private router: Router
  ) {
    const setId = this.activedRoute.snapshot.paramMap.get('setId')
    if (!setId) {
      // TODO fazer isso aqui
      this.router.navigate(['/'])
      return
    }
    this.mtgService.listCards(setId).subscribe({
      next: data => {
       this.cards = data.cards.filter(x => x.types.includes("Creature"));
      },
      error: (err) => {
        this.error = err.error.error
      }
    })
  }

}
