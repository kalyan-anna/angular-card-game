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
      { id: 's1', shape: 's', number: 'A', status: 'facedown' },
      { id: 's2', shape: 's', number: '2', status: 'facedown' },
      { id: 's3', shape: 's', number: '3', status: 'facedown' },
      { id: 's4', shape: 's', number: '4', status: 'facedown' },
      { id: 's5', shape: 's', number: '5', status: 'facedown' },
      { id: 's6', shape: 's', number: '6', status: 'facedown' },
      { id: 's7', shape: 's', number: '7', status: 'facedown' },
      { id: 's8', shape: 's', number: '8', status: 'facedown' },
      { id: 's9', shape: 's', number: '9', status: 'facedown' },
      { id: 's10', shape: 's', number: '10', status: 'facedown' },
      { id: 's11', shape: 's', number: 'J', status: 'facedown' },
      { id: 's12', shape: 's', number: 'Q', status: 'facedown' },
      { id: 's13', shape: 's', number: 'K', status: 'facedown' },
      { id: 'd1', shape: 'd', number: 'A', status: 'faceup' },
    ];
  }

}
