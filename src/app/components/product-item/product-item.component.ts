// import { Product } from 'path-to-your-model';
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

  viewDetails(urlType: 'wiki' | 'official') {
    if (urlType === 'wiki') {
      window.open(this.product.wikiUrl, '_blank');
    } else {
      window.open(this.product.officialUrl, '_blank');
    }
  }

  visitSite(urlType: 'officialUrl') {
    if (urlType === 'officialUrl') {
      window.open(this.product.officialUrl, '_blank');
    }
  }





}
