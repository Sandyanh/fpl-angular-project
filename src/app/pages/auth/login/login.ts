import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  http = inject(HttpClient);
  router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  OnLogin() {
    if (this.loginForm.invalid) return;

    const loginData = this.loginForm.value;

    this.http.post('http://localhost:3000/login', loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        localStorage.setItem('user', JSON.stringify(res.user));
        alert('Đăng nhập thành công!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert('Đăng nhập thất bại: ' + err.message);
      },
    });
  }
}
