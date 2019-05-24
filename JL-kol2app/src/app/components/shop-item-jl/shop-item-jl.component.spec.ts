import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemJLComponent } from './shop-item-jl.component';

describe('ShopItemJLComponent', () => {
  let component: ShopItemJLComponent;
  let fixture: ComponentFixture<ShopItemJLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemJLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemJLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
