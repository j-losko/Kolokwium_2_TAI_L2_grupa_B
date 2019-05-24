import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopJLComponent } from './shop-jl.component';

describe('ShopJLComponent', () => {
  let component: ShopJLComponent;
  let fixture: ComponentFixture<ShopJLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopJLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopJLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
