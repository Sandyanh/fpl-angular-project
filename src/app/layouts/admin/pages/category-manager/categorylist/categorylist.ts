import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ICategory } from '../../../../../interfaces/ICategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  imports: [],
  templateUrl: './categorylist.html',
  styleUrl: './categorylist.css',
})
export class Categorylist {
  router = inject(Router);
  http = inject(HttpClient);
  categories: ICategory[] = [];
  urlApi = 'http://localhost:3000/categories';

  ngOnInit() {
    this.http.get(this.urlApi).subscribe({
      next: (data: any) => (this.categories = data),
      error: (err) => console.log(err),
    });
  }

  goToAddCategory() {
    this.router.navigate(['admin/category/add']);
  }
  edit = (id: number) => {
    this.router.navigate(['admin/category/edit', id]);
  };
  onDelete = (id: number) => {
    if (confirm('Bạn có chắc muốn xóa?')) {
      this.http.delete(`${this.urlApi}/${id}`).subscribe({
        next: (value) => {
          this.categories = this.categories.filter(
            (category) => category.id !== id
          );
        },
        error(err) {
          alert('Xóa thất bại');
        },
      });
    }
  };
}
