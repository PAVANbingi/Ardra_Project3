// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// // Import custom pipe
// import { SearchPipe } from '../../pipes/search.pipe';

// // Import child components
// import { ProductItemComponent } from '../product-item/product-item.component';
// import { ProductFilterComponent } from '../product-filter/product-filter.component';
// import { ProductSortComponent } from '../product-sort/product-sort.component';
// import { PaginationComponent } from '../pagination/pagination.component';

// // Import model and service
// import { Product } from '../../models/product.model';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [
//     CommonModule,
//     FormsModule,
//     SearchPipe,
//     ProductItemComponent,
//     ProductFilterComponent,
//     ProductSortComponent,
//     PaginationComponent,
//   ],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css'],
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];
//   searchText: string = '';
//   selectedSort: string = '';
//   currentPage: number | undefined;

//   constructor(private productService: ProductService) {}

//   ngOnInit(): void {
//     this.products = this.productService.getProducts();
//   }

//   updateSearch(text: string): void {
//     this.searchText = text;
//   }

//   onSortChange(sortOption: string): void {
//     this.selectedSort = sortOption;
//     this.currentPage = 1;
//   }

//   private sortProducts(products: Product[]): Product[] {
//     switch (this.selectedSort) {
//       case 'price-asc':
//         return products.sort((a, b) => a.price - b.price);
//       case 'price-desc':
//         return products.sort((a, b) => b.price - a.price);
//       case 'brand-asc':
//         return products.sort((a, b) => a.brand.localeCompare(b.brand));
//       case 'brand-desc':
//         return products.sort((a, b) => b.brand.localeCompare(a.brand));
//       case 'release-newest':
//         return products.sort(
//           (a, b) =>
//             new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
//         );
//       case 'release-oldest':
//         return products.sort(
//           (a, b) =>
//             new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
//         );
//       default:
//         return products;
//     }
//   }

//   get filteredProducts(): Product[] {
//     const filtered = this.products.filter(
//       (product) =>
//         product.model.toLowerCase().includes(this.searchText.toLowerCase()) ||
//         product.brand.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//     return this.sortProducts(filtered);
//   }
// }
// =======================================================================================================
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Pipes
import { SearchPipe } from '../../pipes/search.pipe';

// Components
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFilterComponent } from '../product-filter/product-filter.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductSortComponent } from '../product-sort/product-sort.component';

// Models & Services
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { SortPipe } from '../../pipes/sort.pipe';
import { ProductSortByBodyTypeComponent } from '../product-sort-by-body/product-sort-by-body.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SearchPipe,
    SortPipe,
    ProductItemComponent,
    ProductFilterComponent,
    PaginationComponent,
    ProductSortComponent,
    ProductSortByBodyTypeComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchText: string = '';
  selectedSort: string = '';
  selectedBodyTypeSort: string = '';

  itemsPerPage = 44;
  currentPage = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  updateSearch(text: string): void {
    this.searchText = text;
    this.currentPage = 1;
  }

  onSortChange(sortOption: string): void {
    this.selectedSort = sortOption;
    this.currentPage = 1;
  }

  onBodyTypeSortChange(bodyType: string): void {
    this.selectedBodyTypeSort = bodyType;
    this.currentPage = 1;
  }

  get filteredAndSortedProducts(): Product[] {
    let filtered = this.products;

    // Apply body type filter
    if (this.selectedBodyTypeSort) {
      filtered = filtered.filter(product =>
        product.bodyType.toLowerCase() === this.selectedBodyTypeSort.toLowerCase()
      );
    }

    // Apply search filter
    filtered = new SearchPipe().transform(filtered, this.searchText);

    // Apply general sort
    filtered = new SortPipe().transform(filtered, this.selectedSort);

    return filtered;
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredAndSortedProducts.slice(start, start + this.itemsPerPage);
  }

  get filteredCount(): number {
    return this.filteredAndSortedProducts.length;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
