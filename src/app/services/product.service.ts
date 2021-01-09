import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from "../common/product";
import { map } from "rxjs/operators";
import { Dish } from "../common/dish";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl='http://localhost:8080/api/products';
  private baseURL='http://localhost:3000/dishes';

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  
  getDishes(): Observable<Dish[]> {
    return this.httpClient
      .get<Dish[]>(this.baseURL);
  }
}

interface GetResponse {
  _embedded: {
    products:Product[];

  }
}