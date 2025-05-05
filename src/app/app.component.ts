import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { ProductSortComponent } from "./components/product-sort/product-sort.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BreadcrumbComponent, ProductFilterComponent, ProductListComponent, PaginationComponent, ProductSortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productListingPage';
}
