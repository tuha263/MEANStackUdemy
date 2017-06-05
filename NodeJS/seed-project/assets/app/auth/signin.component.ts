import {Router} from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router){}

    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.error(error)
            )
        this.myForm.reset();
    }

    ngOnInit() {
        var emailReExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(emailReExp)
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

}