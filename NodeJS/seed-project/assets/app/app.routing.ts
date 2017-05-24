import { AUTH_ROUTES } from './auth/auth.routes';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/Authentication.component';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

