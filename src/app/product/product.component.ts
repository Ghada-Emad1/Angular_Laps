import { Component } from '@angular/core';
import { Product } from '../product';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet,ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  Products: Product[] = [
    {
      id:1,
      image: 'products/product1.png',
      productName: 'Product1',
      productPrice: 23,
      onScale: [1, 2, 3],
    },
    {
      id:2,
      image: 'products/product2.jpg',
      productName: 'Product2',
      productPrice: 83,
      onScale: [1, 2, 3],
    },
    {
      id:3,
      image: 'products/product3.jpg',
      productName: 'Product3',
      productPrice: 93,
      onScale: [1, 0, 3],
    },
  ];
}
