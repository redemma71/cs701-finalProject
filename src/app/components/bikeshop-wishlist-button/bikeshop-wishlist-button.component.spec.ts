import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopWishlistButtonComponent } from './bikeshop-wishlist-button.component';

describe('BikeshopWishlistButtonComponent', () => {
  let component: BikeshopWishlistButtonComponent;
  let fixture: ComponentFixture<BikeshopWishlistButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopWishlistButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopWishlistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
