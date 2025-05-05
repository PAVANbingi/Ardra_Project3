import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent {
  /**
   * Pass in an array of items like:
   * [
   *   { label: 'Home', url: '/' },
   *   { label: 'Products', url: '/products' },
   *   { label: 'Cars', url: '/products/cars' }
   * ]
   */
  @Input() breadcrumbs: { label: string; url: string }[] = [];
}
