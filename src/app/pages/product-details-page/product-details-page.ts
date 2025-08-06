import { Component, inject } from '@angular/core';
import { ExploreItem } from '../components/explore-item/explore-item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../components/comment/comment';
import { IComment } from '../../interfaces/IComment';

@Component({
  selector: 'app-product-details-page',
  imports: [ExploreItem, Comment],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  comments: any;
  product: any;
  id = this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.http.get(`http://localhost:3000/products/${this.id}`).subscribe({
      next: (res) => (this.product = res),
      error: () => alert('Không tìm thấy sản phẩm!'),
    });
    this.http.get(`http://localhost:3000/comments?productId=${this.id}`).subscribe({
      next: (res) => {
        this.comments = res;
      },
    });
  }
  handleComment(newComment: any) {
    this.comments.push(newComment);
  }
}
