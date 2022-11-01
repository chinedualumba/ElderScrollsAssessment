import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElderScrollApiResponse } from '../store/state/elderCard.state.interface';

@Injectable({
  providedIn: 'root',
})
export class ElderScrollsService {
  constructor(private http: HttpClient) {}

  getCards(url?: string): Observable<ElderScrollApiResponse> {
    if (url === undefined || url === '') {
      return this.http.get<ElderScrollApiResponse>(
        'https://api.elderscrollslegends.io/v1/cards?pageSize=20'
      );
    } else {
      return this.http.get<ElderScrollApiResponse>(url);
    }
  }

  getFilteredCards(parameter: string): Observable<ElderScrollApiResponse> {
    return this.http.get<ElderScrollApiResponse>(
      `https://api.elderscrollslegends.io/v1/cards?name=${parameter}&pageSize=20`
    );
  }
}
