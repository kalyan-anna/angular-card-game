import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card-pile',
  templateUrl: './card-pile.component.html',
  styleUrls: ['./card-pile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPileComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

  identify(i: number, card: Card) {
    return card.id;
  }

  isTopCard(isLast: boolean, card: Card) {
    return isLast && this.cards.length > 1 && card.status === 'faceup';
  }
}
