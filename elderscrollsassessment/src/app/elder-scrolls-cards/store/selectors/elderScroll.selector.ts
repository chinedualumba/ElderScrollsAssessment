import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ElderScroll,
  ElderScrollsState,
} from '../state/elderCard.state.interface';

export const selectElderScrollState =
  createFeatureSelector<ElderScrollsState>('elderScrollsCards');

export const ElderScrollsCardsSelector = createSelector(
  selectElderScrollState,
  (state: ElderScrollsState) => state.cards
);

export const ElderScrollsApiSelector = createSelector(
  selectElderScrollState,
  (state: ElderScrollsState) => state.api
);
