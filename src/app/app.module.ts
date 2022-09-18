import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';

import { RecentChatComponent } from './components/recent-chat/recent-chat.component';
import { ActiveChatComponent } from './components/active-chat/active-chat.component';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentChatComponent,
    ActiveChatComponent,
    ChatInfoComponent,
    ChatItemComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
