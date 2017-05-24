import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { LogoutComponent } from './auth/logout.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './auth/Authentication.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './messages/message-input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MessageComponent} from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}