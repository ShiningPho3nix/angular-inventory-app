import { Component, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {

  /**
   * @input productList - the Product[] passed to us.
   */
  @Input() productList: Product[];

  /**
   * @output WhenProductSelected - outputs the current
   *          Product whenever a new Product is selected
   */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onProductSelected: EventEmitter<Product>;

  /**
   * currentSelectedProduct - local state containing
   *             the currently selected `Product`
   */
  private currentSelectedProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentSelectedProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentSelectedProduct) {
      return false;
    }
    return product.sku === this.currentSelectedProduct.sku;
  }
}
