import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { ExploreItem } from "../explore-item/explore-item";

@Component({
  selector: 'app-explore-products',
  imports: [ExploreItem, ExploreItem],
  templateUrl: './explore-products.html',
  styleUrl: './explore-products.css'
})
export class ExploreProducts {

}
