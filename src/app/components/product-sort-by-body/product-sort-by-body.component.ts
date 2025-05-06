import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-sort-by-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-sort-by-body.component.html',
  styleUrls: ['./product-sort-by-body.component.css'],
})
export class ProductSortByBodyTypeComponent {
  selectedSort: string = '';

  @Output() sortChanged = new EventEmitter<string>();

  onSortChange() {
    this.sortChanged.emit(this.selectedSort);
  }
}
