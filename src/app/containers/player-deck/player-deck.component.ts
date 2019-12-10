import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { fromSnap } from 'src/app/reducers/snap.selectors';
import { Observable, fromEvent, merge } from 'rxjs';
import { mergeMap, tap, takeWhile, take } from 'rxjs/operators';

@Component({
  selector: 'snap-player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.scss']
})
export class PlayerDeckComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  turn$: Observable<boolean>;
  alive = true;

  @ViewChild('cardPile', { static: true, read: ElementRef }) cardPileEl: ElementRef<HTMLElement>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards$ = this.store.pipe(select(fromSnap.selectPlayerPile));
    this.turn$ = this.store.pipe(select(fromSnap.selectPlayerTurn));

    merge(fromEvent(this.cardPileEl.nativeElement, 'click'))
      .pipe(
        takeWhile(() => this.alive),
        mergeMap(() => this.turn$.pipe(take(1))),
        tap(turn => {
          if (turn) {
            console.log('turn card......');
          }
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
