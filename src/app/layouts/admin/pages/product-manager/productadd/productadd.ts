import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ICategory } from '../../../../../interfaces/ICategory';

@Component({
  selector: 'app-productadd',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './productadd.html',
  styleUrl: './productadd.css',
})
export class Productadd {
  router = inject(Router);
  http = inject(HttpClient);
  categories: ICategory[] = [];
  selectedValue: any;

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
  }

  OnSubmit() {
    if (!this.productForm.valid) return;

    const productData = {
      ...this.productForm.value,
      categoryId: this.selectedValue.id,
    };

    this.http.post('http://localhost:3000/products', productData).subscribe({
      next: () => {
        alert('Thêm mới sản phẩm thành công');
        this.productForm.reset();
        this.router.navigate(['admin/product']);
      },
      error: (err) => {
        alert('Thêm thất bại: ' + err.message);
      },
    });
  }
}
