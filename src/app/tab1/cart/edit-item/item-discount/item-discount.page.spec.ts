import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDiscountPage } from './item-discount.page';

describe('ItemDiscountPage', () => {
  let component: ItemDiscountPage;
  let fixture: ComponentFixture<ItemDiscountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDiscountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDiscountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
