import { createFormArrayState } from 'ngrx-forms';
import { ElderScroll, ElderScrollsState } from './elderCard.state.interface';

export const INITIAL_ELDER_SCROLL_ITEMS: ElderScroll[] = [];

export const INITIAL_ELDER_SCROLL_STATE = createFormArrayState<ElderScroll>(
  'ELDER_CARD_ID',
  INITIAL_ELDER_SCROLL_ITEMS
);

export const INITIAL_ELDER_CARDS_STATE: ElderScrollsState = {
  cards: INITIAL_ELDER_SCROLL_STATE,
};
