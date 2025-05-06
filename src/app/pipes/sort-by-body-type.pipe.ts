import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sortByBodyType'
})
export class SortByBodyTypePipe implements PipeTransform {

  private bodyTypePriority: string[] = [
    'Electric SUV',
    'Premium MPV',
    'Luxury Car',
    'Sports Car',
    'Roadster',
    'MPV',
    'Crossover',
    'Wagon/Estate',
    'Convertible',
    'Coupe',
    'Compact SUV',
    'Sedan',
    'Hatchback'
  ];

  transform(products: Product[]): Product[] {
    if (!products) return [];

    return [...products].sort((a, b) => {
      return this.getBodyTypePriority(a.bodyType) - this.getBodyTypePriority(b.bodyType);
    });
  }

  private getBodyTypePriority(type: string): number {
    const index = this.bodyTypePriority.indexOf(type);
    return index !== -1 ? index : this.bodyTypePriority.length + 1; // Unknown types come last
  }
}
