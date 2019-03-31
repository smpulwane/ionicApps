import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatPage } from './vat.page';

describe('VatPage', () => {
  let component: VatPage;
  let fixture: ComponentFixture<VatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
