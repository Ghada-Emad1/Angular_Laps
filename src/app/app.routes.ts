import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import path from 'node:path';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: MainComponent},
    { path: 'product', component: ProductComponent },
    {
        path: 'contact', component: ContactComponent
    },
    { path: 'about', component: AboutComponent },
    
];
