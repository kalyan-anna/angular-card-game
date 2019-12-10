import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snap-player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.scss']
})
export class PlayerDeckComponent implements OnInit {
  cards: Card[];

  constructor() { }

  ngOnInit() {
    this.cards = [
      { id: 's1', shape: 's', number: 'A', status: 'faceup' },
      { id: 's2', shape: 's', number: '2', status: 'faceup' },
      { id: 's3', shape: 's', number: '3', status: 'faceup' },
      { id: 's4', shape: 's', number: '4', status: 'faceup' },
      { id: 's5', shape: 's', number: '5', status: 'faceup' },
      { id: 's6', shape: 's', number: '6', status: 'faceup' },
      { id: 's7', shape: 's', number: '7', status: 'faceup' },
      { id: 's8', shape: 's', number: '8', status: 'faceup' },
      { id: 's9', shape: 's', number: '9', status: 'faceup' },
      { id: 's10', shape: 's', number: '10', status: 'faceup' },
      { id: 's11', shape: 's', number: 'J', status: 'faceup' },
      { id: 's12', shape: 's', number: 'Q', status: 'faceup' },
      { id: 's13', shape: 's', number: 'K', status: 'faceup' },
      { id: 'd1', shape: 'd', number: 'A', status: 'faceup' },
    ];
  }

}
