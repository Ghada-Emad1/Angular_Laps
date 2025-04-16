import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    
    
    { path: 'product', component: ProductComponent },
    {
        path: 'contact', component: ContactComponent
    },
    { path: 'about', component: AboutComponent },
    
];
