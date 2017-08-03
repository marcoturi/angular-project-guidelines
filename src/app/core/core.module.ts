import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { LoggingService } from './helpers/logging/logging.service';
import { CartService } from './services/cart/cart.service';
import { ProductService } from './services/product/product.service';

@NgModule({
  providers: [LoggingService, CartService, ProductService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
