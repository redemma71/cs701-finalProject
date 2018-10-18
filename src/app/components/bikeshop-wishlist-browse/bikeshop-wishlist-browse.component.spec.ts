import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopWishlistBrowseComponent } from './bikeshop-wishlist-browse.component';

describe('BikeshopWishlistBrowseComponent', () => {
  let component: BikeshopWishlistBrowseComponent;
  let fixture: ComponentFixture<BikeshopWishlistBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopWishlistBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopWishlistBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
