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
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  router = inject(Router);
  http = inject(HttpClient);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', Validators.required),
  });

  OnSubmit() {
    if (!this.registerForm.valid) return;

    const userData = this.registerForm.value;

    this.http.post('http://localhost:3000/register', userData).subscribe({
      next: () => {
        alert('Đăng ký thành công!');
        this.registerForm.reset();
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert('Đăng ký thất bại: ' + err.message);
      },
    });
  }
}
