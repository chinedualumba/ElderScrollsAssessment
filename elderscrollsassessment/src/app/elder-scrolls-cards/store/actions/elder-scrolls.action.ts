import { Action } from '@ngrx/store';
import { ElderScrollApiResponse } from '../state/elderCard.state.interface';

export enum ElderScrollActionTypes {
  GetCardsCommand = '[Elder Scroll Cards] Get Cards List',
  GetCardsSuccessCommand = '[Elder Scroll Cards] Get Cards List Success',
  GetMoreCardsCommand = '[Elder Scroll Cards] Get More Cards',
  GetFilteredCardsCommand = '[Elder Scroll Cards] Get Filtered Cards',
  // GetFilteredCardsSuccessCommand = '[Elder Scroll Cards] Get Filtered Cards Success',
}
export class GetCards implements Action {
  readonly type = ElderScrollActionTypes.GetCardsCommand;
  constructor() {}
}
export class GetCardsSuccess implements Action {
  readonly type = ElderScrollActionTypes.GetCardsSuccessCommand;
  constructor(public payload: ElderScrollApiResponse) {}
}
export class GetMoreCards implements Action {
  readonly type = ElderScrollActionTypes.GetMoreCardsCommand;
  constructor(public payload: string | undefined) {}
}

export class GetFilteredCards implements Action {
  readonly type = ElderScrollActionTypes.GetFilteredCardsCommand;
  constructor(public payload: string) {}
}

export type ElderScrollsActions =
  | GetCards
  | GetCardsSuccess
  | GetMoreCards
  | GetFilteredCards;
