import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeshopTurnByTurnComponent } from './bikeshop-turn-by-turn.component';

describe('BikeshopTurnByTurnComponent', () => {
  let component: BikeshopTurnByTurnComponent;
  let fixture: ComponentFixture<BikeshopTurnByTurnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeshopTurnByTurnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeshopTurnByTurnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
