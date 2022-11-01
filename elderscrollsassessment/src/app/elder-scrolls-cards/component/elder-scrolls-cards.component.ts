import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormArrayState } from 'ngrx-forms';
import { Observable, of } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import * as elderScrollActions from '../store/actions';
import {
  ElderScrollsApiSelector,
  ElderScrollsCardsSelector,
  selectElderScrollState,
} from '../store/selectors/elderScroll.selector';
import {
  Api,
  ElderScroll,
  ElderScrollsState,
} from '../store/state/elderCard.state.interface';

@Component({
  selector: 'app-elder-scrolls-cards',
  templateUrl: './elder-scrolls-cards.component.html',
  styleUrls: ['./elder-scrolls-cards.component.css'],
})
export class ElderScrollsCardsComponent implements OnInit {
  constructor(private store: Store) {}
  cards$: Observable<FormArrayState<ElderScroll>> | undefined;

  totalCount$: Observable<number> | undefined;
  isLoadMoreDisabled$: Observable<string> | undefined;

  amountOfCardsLoaded: number = 0;

  nextLink: string | undefined;

  searchValue: string = '';

  ngOnInit(): void {
    this.store.dispatch(new elderScrollActions.GetCards());

    this.cards$ = this.store.select(ElderScrollsCardsSelector);

    this.totalCount$ = this.store
      .select(selectElderScrollState)
      .pipe(map((state) => state.totalCount));

    this.isLoadMoreDisabled$ = this.store
      .select(selectElderScrollState)
      .pipe(map((state) => (state.api.nextLink ? '' : 'disabled')));
  }

  loadMore() {
    this.store
      .select(ElderScrollsApiSelector)
      .pipe(take(1))
      .subscribe((state: Api) => {
        this.nextLink = state.nextLink;
      });
    this.store.dispatch(new elderScrollActions.GetMoreCards(this.nextLink));
  }

  searchbyName(event: string) {
    this.store.dispatch(new elderScrollActions.GetFilteredCards(event));
  }
}
