import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopWishlistComponent } from './bikeshop-wishlist.component';

describe('BikeshopWishlistComponent', () => {
  let component: BikeshopWishlistComponent;
  let fixture: ComponentFixture<BikeshopWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
