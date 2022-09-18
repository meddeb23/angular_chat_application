import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-chat',
  templateUrl: './recent-chat.component.html',
  styleUrls: ['./recent-chat.component.scss'],
})
export class RecentChatComponent implements OnInit {
  faSearch = faSearch;
  displaySearchBar: boolean = true;

  @Output() onToggleTheme = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onToggle(): void {
    this.onToggleTheme.emit();
    console.log('emitting event');
  }
  onToggleSearchBar(): void {
    this.displaySearchBar = !this.displaySearchBar;
  }
}
