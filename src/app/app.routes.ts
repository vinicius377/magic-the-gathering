import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { SetListComponent } from './pages/set-list/set-list.component';
import { CardsComponent } from './pages/cards/cards.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: 'Buscar conjuntos de cards'
  },
  {
    path: 'sets',
    component: SetListComponent,
    title: 'Conjunto de cards'
  },
  {
    path: 'cards/:setId',
    component: CardsComponent,
    title: (activedRouter) => {
      const setId = activedRouter.paramMap.get('setId')
      return `Cards para ${setId}`
    }
  }
];
