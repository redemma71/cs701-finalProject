import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopFindComponent } from './bikeshop-find.component';

describe('BikeshopFindComponent', () => {
  let component: BikeshopFindComponent;
  let fixture: ComponentFixture<BikeshopFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
