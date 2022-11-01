import { Actions } from '@ngrx/effects';
import { createFormArrayState, FormArrayState, setValue } from 'ngrx-forms';
import {
  ElderScrollActionTypes,
  ElderScrollsActions,
} from '../actions/elder-scrolls.action';
import { INITIAL_ELDER_CARDS_STATE } from '../state/elderCard.initial-state';
import {
  Api,
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
      let currentCardsState: ElderScroll[] = state.cards.value;

      if (
        action.payload._links === undefined ||
        action.payload._links.prev === undefined
      ) {
        currentCardsState = [];
      }

      const mappedCardsResponse: ElderScroll[] = mapToElderScrollCardInfo(
        currentCardsState,
        action.payload
      );

      const returnedCards: FormArrayState<ElderScroll> = setValue(state.cards, [
        ...mappedCardsResponse,
      ]);

      let apiResponse: Api = {
        nextLink: undefined,
        previousLink: undefined,
      };

      if (action.payload._links !== undefined) {
        apiResponse = {
          nextLink: action.payload._links.next,
          previousLink: action.payload._links.prev,
        };
      }

      state = {
        ...state,
        cards: returnedCards,
        api: apiResponse,
        totalCount: action.payload._totalCount,
      };

      return state;
    }

    default: {
      return state;
    }
  }
}

function mapToElderScrollCardInfo(
  stateValue: ElderScroll[],
  payloads: ElderScrollApiResponse
): ElderScroll[] {
  let mappedResponse: ElderScroll[] =
    stateValue.length > 0 ? [...stateValue] : [];

  if (
    payloads !== undefined &&
    payloads.cards !== undefined &&
    payloads.cards.length > 0
  ) {
    payloads.cards.forEach((cardItem) => {
      const newMappedItem: ElderScroll = {
        cardName: cardItem.name,
        cardText: cardItem.text,
        imageUrl: cardItem.imageUrl,
        setName: cardItem.set.name,
        type: cardItem.type,
      };
      mappedResponse.push(newMappedItem);
    });
  }

  return mappedResponse;
}
