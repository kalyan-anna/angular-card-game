import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import * as fromSnap from '../../reducers/snap.selectors';

@Component({
  selector: 'snap-center-deck',
  templateUrl: './center-deck.component.html',
  styleUrls: ['./center-deck.component.scss']
})
export class CenterDeckComponent implements OnInit {
  cards: Observable<Card[]>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards = this.store.pipe(select(fromSnap.selectCenterPile));
  }

}
