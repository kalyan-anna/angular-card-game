import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { Observable, combineLatest, of } from 'rxjs';
import { fromSnap } from 'src/app/reducers/snap.selectors';
import { tap, delay, take, filter, takeWhile, switchMap, concatMap } from 'rxjs/operators';
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
  reactionTime: number;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards$ = this.store.pipe(select(fromSnap.selectComputerPile));
    this.turn$ = this.store.pipe(select(fromSnap.selectComputerTurn));
    this.match$ = this.store.pipe(select(fromSnap.selectMatch));

    this.store.pipe(
      takeWhile(() => this.alive),
      select(fromSnap.selectReactionTime),
      tap(time => this.reactionTime = time)
    ).subscribe();

    combineLatest(this.turn$, this.match$).pipe(
      tap(([turn, match]) => console.log('match:', match, ' turn:', turn)),
      takeWhile(() => this.alive),
      filter(([turn, match]) => turn || match),
      concatMap(value => of(value).pipe(delay(this.reactionTime))),
      switchMap(() => combineLatest(this.turn$, this.match$).pipe(take(1))),
      filter(([turn, match]) => turn || match),
      tap(([turn, match]) => console.log('match2:', match, ' turn2:', turn)),
      tap(([turn, match]) => {
        if (match) {
          this.store.dispatch(computerCallSnap());
          return;
        }
        if (turn) {
          this.store.dispatch(computerTurnCard());
        }
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
