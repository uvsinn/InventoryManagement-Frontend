import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { GetAllProducts } from '../Responses/GetAllProducts';
import{DeleteProductById} from '../Responses/DeleteProductById'

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  products:Product[]=[];

  constructor(public productService:ProductService, private route:ActivatedRoute){}
    
    ngOnInit():void{
      
      this.productService.GetAll().subscribe((response: GetAllProducts)=>{

        if (response.isSuccess) {

          this.products = response.data;

          console.log(this.products);
        } 
        else {
          console.error('Error: ' + response.message);
        }
      });
      
    }

    ConfirmDelete(id:string): void {
      
      const isConfirmed = window.confirm('Are you sure you want to delete this product?');
  
      if (isConfirmed) {
        // Call method to delete product
        this.productService.DeleteProduct(id).subscribe((response: DeleteProductById) => {
          console.log(response.message);
        },
        (error) => {
          console.error('Error fetching product details:', error);
        }
      );
      }
    }
}
