import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.scss'],
})
export class ActiveChatComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  constructor() {}

  ngOnInit(): void {}
}
