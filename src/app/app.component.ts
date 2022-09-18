import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat_application';
  isDrakTheme: boolean = false;

  toggleTheme(): void {
    console.log('toggle theme');
    this.isDrakTheme = !this.isDrakTheme;
  }
}
