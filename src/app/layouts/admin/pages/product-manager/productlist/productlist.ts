import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../../../interfaces/IProduct';

@Component({
  selector: 'app-productlist',
  imports: [],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {
  router = inject(Router);
  http = inject(HttpClient);
  products: IProduct[] = [];

  urlApi = 'http://localhost:3000/products';
  urlApiCategories = 'http://localhost:3000/categories';

  ngOnInit() {
    this.http.get(this.urlApi).subscribe({
      next: (data: any) => (this.products = data),
      error: (err) => console.log(err),
    });

    this.http.get(this.urlApiCategories).subscribe((categories: any) => {
      this.products = this.products.map((product) => {
        const category = categories.find(
          (category: any) => category.id === product.categoryId
        );
        return { ...product, categoryName: category?.name || 'Không rõ' };
      });
    });
  }

  goToAddProduct() {
    this.router.navigate(['admin/product/add']);
  }
  edit = (id: number) => {
    this.router.navigate(['admin/product/edit', id]);
  };
  onDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa?')) {
      this.http.delete(`${this.urlApi}/${id}`).subscribe({
        next: (value) => {
          this.products = this.products.filter((product) => product.id !== id);
        },
        error(err) {
          alert('Xóa thất bại');
        },
      });
    }
  };
}
