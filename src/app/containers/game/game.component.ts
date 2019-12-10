import { Component, OnInit } from '@angular/core';
import { SnapState } from 'src/app/reducers/snap.reducer';
import { Store } from '@ngrx/store';
import { startGame } from 'src/app/reducers/snap.actions';

@Component({
  selector: 'snap-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  constructor(private store: Store<SnapState>) { }

  ngOnInit() {
  }

  onStartGame() {
    this.store.dispatch(startGame());
  }
}
