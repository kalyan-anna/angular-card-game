import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snap-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cards: Card[];

  constructor() { }

  ngOnInit() {
    this.cards = [
      { id: 'a1', shape: 'a', number: 1 },
      { id: 'a2', shape: 'a', number: 2 },
      { id: 'a3', shape: 'a', number: 3 }
    ];
  }

}
