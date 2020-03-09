import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumModalPage } from './album-modal.page';

describe('AlbumModalPage', () => {
  let component: AlbumModalPage;
  let fixture: ComponentFixture<AlbumModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
