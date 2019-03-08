import { Component, Input } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() product: Product;
  constructor() {
    let newProduct = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99);
    this.product = newProduct;
  }

  setName(name: string) {
    //this.product.name = name; geht nicht, da read-only
    this.product = new Product(this.product.sku, name, this.product.imageUrl, this.product.department, this.product.price); // Muss ein neues Object erzeugt werden.
  }
}
