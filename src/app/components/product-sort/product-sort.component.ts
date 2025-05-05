// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-product-sort',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './product-sort.component.html',
//   styleUrls: ['./product-sort.component.css'],
// })
// export class ProductSortComponent {
//   // Holds the current selected sort option
//   selectedSort: string = '';

//   // Emits the selected sort option to the parent component
//   @Output() sortChanged = new EventEmitter<string>();

//   /**
//    * Called when the sort selection changes.
//    */
//   onSortChange() {
//     this.sortChanged.emit(this.selectedSort);
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-sort',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css'],
})
export class ProductSortComponent {
  selectedSort: string = '';

  @Output() sortChanged = new EventEmitter<string>();

  onSortChange() {
    this.sortChanged.emit(this.selectedSort);
  }
}
