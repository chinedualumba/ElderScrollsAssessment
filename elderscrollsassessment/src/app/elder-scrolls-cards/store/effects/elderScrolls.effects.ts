import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ElderScrollsService } from '../../services/elder-scrolls.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ElderScrollActionTypes } from '../actions';
import { GetCardsSuccess } from '../actions/elder-scrolls.action';
import { ElderScrollApiResponse } from '../state/elderCard.state.interface';

@Injectable()
export class ElderScrollsEffects {
  constructor(
    private actions$: Actions,
    private elderScrollsService: ElderScrollsService
  ) {}

  getCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ElderScrollActionTypes.GetCardsCommand),
      mergeMap(() =>
        this.elderScrollsService.getCards().pipe(
          map((cards: ElderScrollApiResponse[]) => {
            return new GetCardsSuccess(cards);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
