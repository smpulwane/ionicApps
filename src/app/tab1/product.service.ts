import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    {
    id: '1',
    title: 'Kids',
    description: 'Kids swim fare',
    price: 25
   },
   {
    id: '2',
    title: 'Adults',
    description: 'Adults swim fare',
    price: 50
   }

];

  getAllProducts(){
    return [...this.products]; // returns a copy of products array, without affecting the original array
  }
  getProduct(productId: string){
    return {
      ...this.products.find( product => {
            return product.id === productId;
           }

      )};
  }
}
