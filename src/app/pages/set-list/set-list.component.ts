import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FindSetsParams, Set } from 'app/types/Set';
import { Observable } from 'rxjs';
import { MtgService } from 'app/services/mtg.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from 'app/components/loading/loading.component';
import { ErrorComponent } from 'app/components/error/error.component';

@Component({
  selector: 'app-set-list',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    LoadingComponent,
    ErrorComponent
  ],
  templateUrl: './set-list.component.html',
  styleUrl: './set-list.component.scss'
})
export class SetListComponent {
  private params = inject(ActivatedRoute).queryParams as Observable<FindSetsParams>;
  sets!: Set[]
  requestError = '';

  constructor(private mtgService: MtgService, private router: Router) {
    this.params.subscribe(params => {
      this.mtgService.findSets(params).subscribe({
        next: data => {
           this.sets = data.sets.map(set => ({
             ...set,
             releaseDate: new Date(set.releaseDate).toLocaleDateString('pt-br')
           }))
        },
        error: (err) => {
          this.requestError = err.error.error;
        }
      })
    })
  }

  goToCards(setId:string ) {
    this.router.navigateByUrl(`cards/${setId}`)
  }

}
