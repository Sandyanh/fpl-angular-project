import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-best-selling-products',
  imports: [ProductItem],
  templateUrl: './best-selling-products.html',
  styleUrl: './best-selling-products.css'
})
export class BestSellingProducts {

}
