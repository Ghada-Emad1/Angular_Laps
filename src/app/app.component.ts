import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { Router } from 'express';
import { Location } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
  
    FooterComponent,
  
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentPath: string = '';

  constructor(private location: Location) {
    this.currentPath = this.location.path();
  }
}
