import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {

  /**
   * Filters the product list by search text across multiple fields.
   * @param products - Array of Product objects
   * @param searchText - User input search string
   * @returns Filtered array of Product objects
   */
  transform(products: Product[] = [], searchText: string = ''): Product[] {
    if (!searchText.trim()) {
      return products; // If no search text, return full list
    }

    const lowerSearch = searchText.toLowerCase();

    return products.filter(product => this.matches(product, lowerSearch));
  }

  /**
   * Check if the product matches the search term in any relevant field.
   * You can extend this to include more fields if needed.
   *
   * @param product - A Product object
   * @param search - Lowercase search string
   * @returns true if any field matches, false otherwise
   */
  private matches(product: Product, search: string): boolean {
    // Null safety for fields
    const brand = product.brand?.toLowerCase() || '';
    const model = product.model?.toLowerCase() || '';
    const bodyType = product.bodyType?.toLowerCase() || '';
    const fuelType = product.fuelType?.toLowerCase() || '';
    const color = product.color?.toLowerCase() || '';
    const transmission = product.transmission?.toLowerCase() || '';

    return (
      brand.includes(search) ||
      model.includes(search) ||
      bodyType.includes(search) ||
      fuelType.includes(search) ||
      color.includes(search) ||
      transmission.includes(search)
    );
  }
}
