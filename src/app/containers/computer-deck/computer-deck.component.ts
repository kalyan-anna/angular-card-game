import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { Observable } from 'rxjs';
import { fromSnap } from 'src/app/reducers/snap.selectors';
import { tap, delay, mergeMap, take, filter, takeWhile } from 'rxjs/operators';
import { computerTurnCard, computerCallSnap } from 'src/app/reducers/snap.actions';

@Component({
  selector: 'snap-computer-deck',
  templateUrl: './computer-deck.component.html',
  styleUrls: ['./computer-deck.component.scss']
})
export class ComputerDeckComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  turn$: Observable<boolean>;
  match$: Observable<boolean>;
  alive = true;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards$ = this.store.pipe(select(fromSnap.selectComputerPile));
    this.turn$ = this.store.pipe(select(fromSnap.selectComputerTurn));
    this.match$ = this.store.pipe(select(fromSnap.selectMatch));

    this.turn$.pipe(
      takeWhile(() => this.alive),
      filter(turn => turn),
      delay(500),
      mergeMap(() => this.turn$.pipe(take(1))),
      filter(turn => turn),
      tap(() => {
        this.store.dispatch(computerTurnCard());
      })
    ).subscribe();

    this.match$.pipe(
      takeWhile(() => this.alive),
      filter(match => match),
      delay(2000),
      mergeMap(() => this.match$.pipe(take(1))),
      filter(match => match),
      tap(() => {
        this.store.dispatch(computerCallSnap());
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
