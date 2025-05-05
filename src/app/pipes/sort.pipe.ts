import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], sortOption: string): Product[] {
    if (!products || !sortOption) return products;

    const sorted = [...products];

    switch (sortOption) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'brand-asc':
        return sorted.sort((a, b) => a.brand.localeCompare(b.brand));
      case 'brand-desc':
        return sorted.sort((a, b) => b.brand.localeCompare(a.brand));
      case 'release-newest':
        return sorted.sort((a, b) =>
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
      case 'release-oldest':
        return sorted.sort((a, b) =>
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
      default:
        return sorted;
    }
  }
}
