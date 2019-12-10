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
      { id: 'a3', shape: 'a', number: 3 },
      { id: 'a4', shape: 'a', number: 3 },
      { id: 'a5', shape: 'a', number: 3 },
      { id: 'a6', shape: 'a', number: 3 },
      { id: 'a7', shape: 'a', number: 3 },
      { id: 'a8', shape: 'a', number: 3 },
      { id: 'a9', shape: 'a', number: 3 },
      { id: 'a10', shape: 'a', number: 3 },
      { id: 'a11', shape: 'a', number: 3 },
      { id: 'a12', shape: 'a', number: 3 },
      { id: 'a13', shape: 'a', number: 3 },
      { id: 'a14', shape: 'a', number: 3 },
      { id: 'a15', shape: 'a', number: 3 }
    ];
  }

}
