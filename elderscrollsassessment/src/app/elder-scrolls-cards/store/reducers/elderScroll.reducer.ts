import { createFormArrayState, FormArrayState, setValue } from 'ngrx-forms';
import {
  ElderScrollActionTypes,
  ElderScrollsActions,
} from '../actions/elder-scrolls.action';
import {
  INITIAL_ELDER_CARDS_STATE,
  INITIAL_ELDER_SCROLL_STATE,
} from '../state/elderCard.initial-state';
import {
  ElderScroll,
  ElderScrollApiResponse,
  ElderScrollsState,
} from '../state/elderCard.state.interface';

export function elderScrollReducer(
  state = INITIAL_ELDER_CARDS_STATE,
  action: ElderScrollsActions
): ElderScrollsState {
  switch (action.type) {
    case ElderScrollActionTypes.GetCardsSuccessCommand: {
      const mappedResponse: ElderScroll[] = mapToElderScroll(action.payload);

      const returnedCards: FormArrayState<ElderScroll> = setValue(state.cards, [
        ...mappedResponse,
      ]);
      state = { ...state, cards: returnedCards };
      return state;
    }

    default: {
      state = {
        cards: INITIAL_ELDER_SCROLL_STATE,
      };

      return state;
    }
  }
}

function mapToElderScroll(payloads: ElderScrollApiResponse[]): ElderScroll[] {
  let mappedResponse: ElderScroll[] = [];

  if (payloads !== undefined && payloads.length > 0) {
    payloads.forEach((payload) => {
      const newMappedItem: ElderScroll = {
        cardName: payload.cards.name,
        cardText: payload.cards.text,
        imageUrl: payload.cards.imageUrl,
        setName: payload.cards.set.name,
        type: payload.cards.type,
        nextLink: payload._links.next,
        previousLink: payload._links.prev,
      };
      mappedResponse.push(newMappedItem);
    });
  }

  return mappedResponse;
}
