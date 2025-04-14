import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Category[] = [
    {id:1, image: 'categories/cat1.jpeg', prices: [12, 13, 14] },
    {id:2, image: 'categories/cat2.jpg', prices: [122, 133, 144] },
    {id:3, image: 'categories/cat3.jpeg', prices: [44, 66, 77] },
  ];
}
