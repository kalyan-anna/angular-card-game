import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.scss']
})
export class CardPileComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

  identify(i: number, card: Card) {
    return card.id;
  }
}
