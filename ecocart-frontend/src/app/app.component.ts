import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { CategoryHighlightComponent } from './features/category-highlight/category-highlight.component';
import { HotProductsComponent } from './features/hot-products/hot-products.component';
import { BannersComponent } from './features/banners/banners.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    CategoryHighlightComponent,
    HotProductsComponent,
    BannersComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecocart-frontend';
}
