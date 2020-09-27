import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'Giày 1',
      price: 400000,
      colors: ['#ccc', '#000', '#ff0', '#0F0'],
      sizes: ['XX', 'XL', 'L', 'M', 'S', 'XS', '38', '39', '40', '41'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    },
    {
      id: 2,
      name: 'Giày 2',
      price: 500000,
      colors: ['#ccc', '#000', '#ff0', '#0F0'],
      sizes: ['XX', 'XL', 'L', 'M', 'S'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    },
    {
      id: 3,
      name: 'Giày 3',
      price: 1000000,
      colors: ['#ccc', '#000', '#ff0', '#0F0', '#00f'],
      sizes: ['XX', 'XL', 'L', 'M', 'S'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    }
  ];

  /**
   * return lisst Product from db
   */
  getProducts(): Observable<Product[]> {
    return new Observable(observer => {
      observer.next(this.products);
    });
  }

  /**
   * this method return Product by Id
   * @param id : id of product
   */
  getProductById(id: number): Observable<Product> {
    return new Observable(observer => {
      const product = this.products.find(p => p.id = id);
      observer.next(product);
    });
  }

}
