import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoryadd',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categoryadd.html',
  styleUrl: './categoryadd.css',
})
export class Categoryadd {
  router = inject(Router);
  http = inject(HttpClient);

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  OnSubmit() {
    if (!this.categoryForm.valid) return;

    const categoryData = this.categoryForm.value;

    this.http.post('http://localhost:3000/categories', categoryData).subscribe({
      next: () => {
        alert('Thêm mới danh mục thành công');
        this.categoryForm.reset();
        this.router.navigate(['admin/category']);
      },
      error: (err) => {
        alert('Thêm thất bại: ' + err.message);
      },
    });
  }
}
