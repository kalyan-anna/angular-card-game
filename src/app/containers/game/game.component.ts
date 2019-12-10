import { Component, OnInit } from '@angular/core';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { Store, select } from '@ngrx/store';
import { startGame, resetGame } from 'src/app/reducers/snap.actions';
import { Observable } from 'rxjs';
import { fromSnap } from 'src/app/reducers/snap.selectors';

@Component({
  selector: 'snap-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  isPlaying: Observable<boolean>;

  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
    this.isPlaying = this.store.pipe(select(fromSnap.selectPlaying));
  }

  onStartGame() {
    this.store.dispatch(startGame());
  }

  onRestartGame() {
    this.store.dispatch(resetGame());
    this.store.dispatch(startGame());
  }
}
