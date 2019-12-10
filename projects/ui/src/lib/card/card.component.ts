import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Input() position: any;

  constructor() { }

  ngOnInit() {
  }

  get isFaceup() {
    return this.card.status === 'faceup';
  }
}
