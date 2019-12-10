import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { fromSnap } from 'src/app/reducers/snap.selectors';
import { takeWhile, mergeMap, filter, take, tap } from 'rxjs/operators';
import { playerCallSnap } from 'src/app/reducers/snap.actions';

@Component({
  selector: 'snap-center-deck',
  templateUrl: './center-deck.component.html',
  styleUrls: ['./center-deck.component.scss']
})
export class CenterDeckComponent implements OnInit, OnDestroy {
  cards$: Observable<Card[]>;
  alive = true;
  snapMatch$: Observable<boolean>;

  @ViewChild('cardPile', { static: true, read: ElementRef })
  cardPileEl: ElementRef<HTMLElement>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.cards$ = this.store.pipe(select(fromSnap.selectCenterPile));
    this.snapMatch$ = this.store.pipe(select(fromSnap.selectMatch));

    fromEvent(this.cardPileEl.nativeElement, 'click')
      .pipe(
        takeWhile(() => this.alive),
        mergeMap(() => this.snapMatch$.pipe(take(1))),
        filter(match => match),
        tap(() => {
          this.store.dispatch(playerCallSnap());
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
