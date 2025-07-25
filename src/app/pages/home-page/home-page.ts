import { Component } from '@angular/core';
import { Slide } from "../components/slide/slide";
import { CategoryList } from "../components/category-list/category-list";
import { BestSellingProducts } from "../components/best-selling-products/best-selling-products";
import { Banner } from '../components/banner/banner';
import { ExploreProducts } from "../components/explore-products/explore-products";
import { NewArrival } from "../components/new-arrival/new-arrival";
import { Block } from "../components/block/block";

@Component({
  selector: 'app-home-page',
  imports: [Slide, CategoryList, BestSellingProducts, Banner, ExploreProducts, NewArrival, Block],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
