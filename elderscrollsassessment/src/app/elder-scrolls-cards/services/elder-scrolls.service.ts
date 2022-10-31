import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElderScrollApiResponse } from '../store/state/elderCard.state.interface';

@Injectable({
  providedIn: 'root',
})
export class ElderScrollsService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<ElderScrollApiResponse[]> {
    return this.http.get<ElderScrollApiResponse[]>(
      'https://api.elderscrollslegends.io/v1/cards?pageSize=20'
    );
  }
}
