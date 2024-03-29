import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}
