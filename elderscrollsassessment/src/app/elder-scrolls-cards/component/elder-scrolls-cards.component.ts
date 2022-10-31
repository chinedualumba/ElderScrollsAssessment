import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as elderScrollActions from '../store/actions';

@Component({
  selector: 'app-elder-scrolls-cards',
  templateUrl: './elder-scrolls-cards.component.html',
  styleUrls: ['./elder-scrolls-cards.component.css'],
})
export class ElderScrollsCardsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new elderScrollActions.GetCards());
  }
}
