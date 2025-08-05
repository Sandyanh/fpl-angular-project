import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../../interfaces/IProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchproduct',
  imports: [CommonModule],
  templateUrl: './searchproduct.html',
  styleUrl: './searchproduct.css'
})
export class Searchproduct {
  router = inject(ActivatedRoute)
  http = inject(HttpClient)
  products: IProduct[] = []
  keywords = "";
  ngOnInit(){
    this.keywords = this.router.snapshot.queryParams["keywords"]
    this.http.get(`http://localhost:3000/products?name_like=${this.keywords}`).subscribe(data => {
      // console.log(data)
      this.products = data as IProduct[]
    },
    error => {
      console.log(error)
    }
  )
  }
}
