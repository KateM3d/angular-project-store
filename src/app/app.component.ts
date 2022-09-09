import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
// import { products as data } from './data/products';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular app';
  // products: Product[] = [];
  loading: boolean = false;
  products$: Observable<Product[]> | undefined;
  term = '';

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => {
        this.loading = false;
      })
    );
    // this.productsService.getAll().subscribe((products) => {
    //   console.log(products);
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
