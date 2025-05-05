import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
