import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import * as fromSnap from '../../reducers/snap.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'snap-player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.scss']
})
export class PlayerDeckComponent implements OnInit {
  cards: Observable<Card[]>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards = this.store.pipe(select(fromSnap.selectPlayerPile));
  }

}
