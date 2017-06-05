import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-logout',
    templateUrl: "./logout.component.html"
})
export class LogoutComponent {

    constructor(private authService: AuthService, private router: Router){}

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/auth', 'signin'])
    }
}