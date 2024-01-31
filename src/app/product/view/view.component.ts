import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductById } from '../Responses/GetProductById';
@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  productId!:string| null;
  prd!:Product;

  constructor(public productService:ProductService, private router: Router, private route:ActivatedRoute){
  }

  ngOnInit():void{
    this.productId =this.route.snapshot.params['productId'];

    this.productService.getProductById(this.productId).subscribe((response: GetProductById) => {
        this.prd = response.data;
      },
      (error) => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}
