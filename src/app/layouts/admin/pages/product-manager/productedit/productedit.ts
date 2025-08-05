import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../../../../interfaces/ICategory';

@Component({
  selector: 'app-productedit',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './productedit.html',
  styleUrl: './productedit.css',
})
export class Productedit {
  http = inject(HttpClient);
  router = inject(Router);
  categories: ICategory[] = [];
  selectedValue: any;
  params = inject(ActivatedRoute);
  id = this.params.snapshot.params['id'];

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
    categoryId: new FormControl(''),
  });

  ngOnInit() {
    this.http.get(`http://localhost:3000/categories`).subscribe({
      next: (data: any) => (this.categories = data),
      error: (err) => console.log(err),
    });
    this.http.get<any>(`http://localhost:3000/products/${this.id}`).subscribe({
      next: (data) => {
        this.productForm.patchValue(data);
      },
      error: () => {
        alert('Không tìm thấy danh mục');
        this.router.navigate(['admin/product']);
      },
    });
  }

  onSubmit() {
    if (!this.productForm.valid) return;
    const updatedData = {
      ...this.productForm.value,
      categoryId: this.selectedValue.id,
    };

    this.http
      .put(`http://localhost:3000/products/${this.id}`, updatedData)
      .subscribe({
        next: () => {
          alert('Cập nhật thành công');
          this.router.navigate(['admin/product']);
        },
        error: (err) => {
          alert('Cập nhật thất bại: ' + err.message);
        },
      });
  }
}
