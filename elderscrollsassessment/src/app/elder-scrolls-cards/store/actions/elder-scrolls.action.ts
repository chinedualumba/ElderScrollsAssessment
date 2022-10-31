import { Action } from '@ngrx/store';
import { ElderScrollApiResponse } from '../state/elderCard.state.interface';

export enum ElderScrollActionTypes {
  GetCardsCommand = '[Elder Scroll Cards] Get Cards List',
  GetCardsSuccessCommand = '[Elder Scroll Cards] Get Cards List Success',
}

export class GetCards implements Action {
  readonly type = ElderScrollActionTypes.GetCardsCommand;
  constructor() {}
}
export class GetCardsSuccess implements Action {
  readonly type = ElderScrollActionTypes.GetCardsSuccessCommand;
  constructor(public payload: ElderScrollApiResponse[]) {}
}

export type ElderScrollsActions = GetCards | GetCardsSuccess;
