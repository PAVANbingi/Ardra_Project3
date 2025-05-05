import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-filter.component.html',
})
export class ProductFilterComponent {
  // Holds the current search text
  searchText: string = '';

  // Emits search text change to parent component
  @Output() searchChanged = new EventEmitter<string>();

  /**
   * Called on input change; emits updated search text to parent.
   */
  onSearchChange() {
    this.searchChanged.emit(this.searchText.trim());
  }



  /**
   * Optional: Add reset method to clear search.
   */
  resetSearch() {
    this.searchText = '';
    this.onSearchChange();
  }
}
