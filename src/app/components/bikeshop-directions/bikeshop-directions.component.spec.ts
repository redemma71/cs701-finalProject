import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopDirectionsComponent } from './bikeshop-directions.component';

describe('BikeshopDirectionsComponent', () => {
  let component: BikeshopDirectionsComponent;
  let fixture: ComponentFixture<BikeshopDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
