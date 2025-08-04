import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ICategory } from '../../../interfaces/ICategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css',
})
export class CategoryList {
  http = inject(HttpClient);
  router = inject(Router);
  categories: ICategory[] = [];
  urlApi = 'http://localhost:3000/categories';

  ngOnInit() {
    this.http.get(this.urlApi).subscribe({
      next: (data: any) => (this.categories = data),
      error: (err) => console.log(err),
    });
  }
  goToCategory(id: number) {
    this.router.navigate(['/category', id]);
  }
}
