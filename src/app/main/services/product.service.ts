import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  sizes: string[];
  imageUrl: string;
}

export interface OptionProduct {
  prices: string[];
  colors: string[];
  sizes: string[];
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
      sizes: ['XX', 'XL', 'L', 'M', 'S', 'XS', '38', '39', '40', '41', '42', '43', '44'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    },
    {
      id: 2,
      name: 'Giày 2',
      price: 500000,
      colors: ['#ccc', '#000', '#ff0', '#0F0'],
      sizes: ['XX', 'XL', 'L', 'M', 'S', '38', '39', '40'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    },
    {
      id: 3,
      name: 'Giày 3',
      price: 1000000,
      colors: ['#ccc', '#000', '#ff0', '#0F0', '#00f'],
      sizes: ['XX', 'XL', 'L', 'M', 'S', '38', '39'],
      imageUrl: 'https://giayxshop.vn/wp-content/uploads/2018/12/MG_2427-600x600.jpg'
    }
  ];

  readonly colors = ['#ccc', '#000', '#ff0', '#0F0', '#00f', '#AFFF33', '#FFF633', '#FF9333', '#FF4C33', '#33FFF9'];
  readonly sizes = ['XX', 'XL', 'L', 'M', 'S', 'XS', '38', '39', '40', '41', '42', '43', '44'];

  /**
   * return list Product from db
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

  /**
   * return list color
   */
  getColors(): Observable<string[]> {
    return new Observable(observer => {
      observer.next(this.colors);
    });
  }

  /**
   * return list sizes
   */
  getSizes(): Observable<string[]> {
    return new Observable(observer => {
      observer.next(this.sizes);
    });
  }

}
