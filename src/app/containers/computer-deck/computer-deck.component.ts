import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { Observable } from 'rxjs';
import { fromSnap } from 'src/app/reducers/snap.selectors';

@Component({
  selector: 'snap-computer-deck',
  templateUrl: './computer-deck.component.html',
  styleUrls: ['./computer-deck.component.scss']
})
export class ComputerDeckComponent implements OnInit {
  cards: Observable<Card[]>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards = this.store.pipe(select(fromSnap.selectComputerPile));
  }

}
