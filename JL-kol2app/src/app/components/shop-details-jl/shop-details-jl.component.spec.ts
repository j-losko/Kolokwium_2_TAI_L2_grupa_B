import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsJLComponent } from './shop-details-jl.component';

describe('ShopDetailsJLComponent', () => {
  let component: ShopDetailsJLComponent;
  let fixture: ComponentFixture<ShopDetailsJLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsJLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsJLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
