import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ICategory } from '../../../../../interfaces/ICategory';

@Component({
  selector: 'app-categorylist',
  imports: [],
  templateUrl: './categorylist.html',
  styleUrl: './categorylist.css',
})
export class Categorylist {
  http = inject(HttpClient);
  categories: ICategory[] = [];
  urlApi = 'http://localhost:3000/categories';

  ngOnInit() {
    this.http.get(this.urlApi).subscribe({
      next: (data: any) => (this.categories = data),
      error: (err) => console.log(err),
    });
  }

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
