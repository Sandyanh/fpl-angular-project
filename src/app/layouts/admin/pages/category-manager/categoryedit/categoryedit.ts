import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoryedit',
  imports: [ReactiveFormsModule],
  templateUrl: './categoryedit.html',
  styleUrl: './categoryedit.css',
})
export class Categoryedit {
  http = inject(HttpClient);
  router = inject(Router);
  params = inject(ActivatedRoute);
  id = this.params.snapshot.params['id'];

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  ngOnInit() {
    this.http
      .get<any>(`http://localhost:3000/categories/${this.id}`)
      .subscribe({
        next: (data) => {
          this.categoryForm.patchValue(data);
        },
        error: () => {
          alert('Không tìm thấy danh mục');
          this.router.navigate(['admin/category']);
        },
      });
  }

  onSubmit() {
    if (!this.categoryForm.valid) return;

    const updatedData = this.categoryForm.value;

    this.http
      .put(`http://localhost:3000/categories/${this.id}`, updatedData)
      .subscribe({
        next: () => {
          alert('Cập nhật thành công');
          this.router.navigate(['admin/category']);
        },
        error: (err) => {
          alert('Cập nhật thất bại: ' + err.message);
        },
      });
  }
}
