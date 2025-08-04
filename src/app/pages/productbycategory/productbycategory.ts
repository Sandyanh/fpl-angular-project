import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productbycategory',
  imports: [],
  templateUrl: './productbycategory.html',
  styleUrl: './productbycategory.css',
})
export class Productbycategory {
  http = inject(HttpClient);
  params = inject(ActivatedRoute);
  router = inject(Router);

  products: any[] = [];
  categoryName: string = '';
  categoryId!: number;

  ngOnInit(): void {
    this.categoryId = this.params.snapshot.params['id'];

    // Lấy SP theo id danh mục
    this.http
      .get<any[]>(
        `http://localhost:3000/products?categoryId=${this.categoryId}`
      )
      .subscribe((data) => (this.products = data));

    // Tên danh mục
    this.http
      .get<any>(`http://localhost:3000/categories/${this.categoryId}`)
      .subscribe({
        next: (res) => (this.categoryName = res.name),
        error: () => (this.categoryName = ''),
      });
  }
  handleDetail(id: number) {
    this.router.navigate(['/product', id]);
  }
}
