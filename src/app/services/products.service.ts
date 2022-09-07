import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable, delay, catchError, throwError, retry } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products', {
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(delay(1000), retry(2), catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
