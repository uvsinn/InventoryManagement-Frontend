import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from './product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL:string=environment.apiBaseUrl;

  // httpOptions={
  //   headers: new HttpHeaders({
  //     'content-Type':'application/json'
  //   })
  // }
  constructor(private httpClient:HttpClient) { }

  GetAll(): Observable<any>{
    return this.httpClient.get(this.apiURL+'/GetAllProducts')
  }

  PostProducts(product:Product):Observable<any>{
    return this.httpClient.post(this.apiURL+'/InsertProduct',product)
  }

  getProductById(id:string|null):Observable<any>{
    return this.httpClient.get(this.apiURL+'/GetProductById'+'?ID='+id)
  }

  UpdateProduct(product:Product):Observable<any>{

    //const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.apiURL+'/UpdateProductById', product)
  }

  DeleteProduct(id:string|null):Observable<any>{
    return this.httpClient.delete(this.apiURL+'/DeleteProductById'+'?ID='+id)
  }
}

