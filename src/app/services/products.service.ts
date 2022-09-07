import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(delay(2000));
  }
}
