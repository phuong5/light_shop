import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from '@app/main/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  productList: Product[];
  constructor(
    private produtService: ProductService
  ) { }

  ngOnInit(): void {
    this.produtService.getProducts().subscribe(
      res => {
        this.productList = res ? res : []
        console.log(res);
        console.log(this.productList)
      }
    );
  }

  trackByFn(index, item) {
    return index;
  }
}
