import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/tabs/tab1', pathMatch: 'full'},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'product-detail/:productId', loadChildren: './tab1/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'cart', loadChildren: './tab1/cart/cart.module#CartPageModule' },
  { path: 'payment-method', loadChildren: './tab1/cart/payment-method/payment-method.module#PaymentMethodPageModule' },
  { path: 'cash', loadChildren: './tab1/cart/payment-method/cash/cash.module#CashPageModule' },
  { path: 'confirm', loadChildren: './tab1/cart/payment-method/cash/confirm/confirm.module#ConfirmPageModule' },
  { path: 'edit-item', loadChildren: './tab1/cart/edit-item/edit-item.module#EditItemPageModule' },
  { path: 'item-discount', loadChildren: './tab1/cart/edit-item/item-discount/item-discount.module#ItemDiscountPageModule' },
  { path: 'discount', loadChildren: './tab1/cart/discount/discount.module#DiscountPageModule' },
  { path: 'vat', loadChildren: './tab1/cart/vat/vat.module#VatPageModule' },
  { path: 'sale', loadChildren: './tab2/sale/sale.module#SalePageModule' },
  { path: 'note', loadChildren: './tab2/sale/note/note.module#NotePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
