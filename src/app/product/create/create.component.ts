import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  newProduct: Product = {
    id:"",
    name: '',
    description: '',
    amount: 0,
    isAvailable: true,
    quantity: 0
  };

  constructor(public productService:ProductService, private router: Router){}

  submit(){
    console.log(this.newProduct);
    this.productService.PostProducts(this.newProduct).subscribe((res:any)=>{
      
      console.log("Product Created Successfully",this.newProduct);
      alert("Product Created Successfully!");
      this.router.navigateByUrl('product/index');
    })
  }

}
