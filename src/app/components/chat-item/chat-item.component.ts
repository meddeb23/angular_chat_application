import { Component, OnInit } from '@angular/core';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
  faCheckDouble = faCheckDouble;
  constructor() {}

  ngOnInit(): void {}
}
