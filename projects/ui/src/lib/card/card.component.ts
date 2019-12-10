import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
