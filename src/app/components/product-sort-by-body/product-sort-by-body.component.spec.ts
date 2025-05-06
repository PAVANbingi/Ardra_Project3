import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSortByBodyComponent } from './product-sort-by-body.component';

describe('ProductSortByBodyComponent', () => {
  let component: ProductSortByBodyComponent;
  let fixture: ComponentFixture<ProductSortByBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSortByBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSortByBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
