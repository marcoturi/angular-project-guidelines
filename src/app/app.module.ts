import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/catalog/product-list/product-list.component';
import { ProductDetailComponent } from './components/catalog/product-detail/product-detail.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
