import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/main/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService) { }

  sizes = [];
  colors = [];

  ngOnInit(): void {
    this.productService.getSizes().subscribe(res => {
      this.sizes = res;
    });

    this.productService.getColors().subscribe(res => {
      this.colors = res;
    });
  }

}
