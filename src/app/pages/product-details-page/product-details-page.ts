import { Component, inject } from '@angular/core';
import { ExploreItem } from '../components/explore-item/explore-item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  imports: [ExploreItem],
  templateUrl: './product-details-page.html',
  styleUrl: './product-details-page.css',
})
export class ProductDetailsPage {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);

  product: any;
  id = this.route.snapshot.params['id'];
  ngOnInit(): void {
    this.http.get(`http://localhost:3000/products/${this.id}`).subscribe({
      next: (res) => (this.product = res),
      error: () => alert('Không tìm thấy sản phẩm!'),
    });
  }
}
