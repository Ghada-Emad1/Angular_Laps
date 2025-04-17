import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-main',
  imports: [NavbarComponent, AboutComponent, ContactComponent, FooterComponent, ProductComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
