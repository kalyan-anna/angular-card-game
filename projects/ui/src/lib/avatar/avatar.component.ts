import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
