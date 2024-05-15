import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FindSetsParams, Set } from 'app/types/Set';
import { Card } from 'app/types/Card';
import { cardListMock } from '_testMocks/card';
import { setListMock } from '_testMocks/set';

interface FindSets {
  sets: Set[]
}

interface ListCards {
  cards: Card[]
}

@Injectable({
  providedIn: 'root'
})
export class MtgService {
  private readonly apiUrl = 'https://api.magicthegathering.io/v1'
  constructor(private http: HttpClient) {}

  findSets(params: Partial<FindSetsParams>):Observable<FindSets> {
   return this.http.get<FindSets>(`${this.apiUrl}/sets`,  { params })
  }

  listCards(setId: string):Observable<ListCards> {
    return this.http.get<ListCards>(`${this.apiUrl}/sets/${setId}/booster`)
  }
}

export class MtgServiceMock extends MtgService {
 override listCards(setId: string): Observable<ListCards> {
    return of({ cards: cardListMock })
 }

 override findSets(params: Partial<FindSetsParams>): Observable<FindSets> {
   return of({ sets: setListMock })
 }
}


