import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

/**
 * Eine Komponente zum anzeigen 
 */
@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
})
export class ProductDepartmentComponent {

  @Input() product: Product;
}
