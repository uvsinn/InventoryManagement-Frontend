import { Component } from '@angular/core';
import { Product } from '../product';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetProductById } from '../Responses/GetProductById';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id!:string|null;
  editedProduct:Product={
    id: '',
    name: '',
    description: '',
    amount: 0,
    isAvailable: false,
    quantity: 0,
  }

  constructor(public productService: ProductService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id=this.route.snapshot.params['productId'];
    this.productService.getProductById(this.id).subscribe((response:GetProductById)=>{
      this.editedProduct=response.data;
    },
    (error) => {
      console.error('Error fetching product details:', error);
    }
    );
  }

  submit(){
    this.productService.UpdateProduct(this.editedProduct).subscribe((res:any)=>{

      console.log('Product updated successfully:', this.editedProduct);
      alert("Data Updated Successfully");
      this.router.navigateByUrl('product/index');
    },
    (error) => {
      console.error('Error updating product:', error);
    });
  }
}


