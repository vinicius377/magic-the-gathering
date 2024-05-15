import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindSetsParams, Set } from 'app/types/Set';
import { Card } from 'app/types/Card';

interface FindSets {
  sets: Set[]
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

  listCards(setId: string):Observable<{ cards: Card[] }> {
    return this.http.get<{ cards: Card[] }>(`${this.apiUrl}/sets/${setId}/booster`)
  }
}
