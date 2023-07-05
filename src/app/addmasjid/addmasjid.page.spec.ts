import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddmasjidPage } from './addmasjid.page';

describe('AddmasjidPage', () => {
  let component: AddmasjidPage;
  let fixture: ComponentFixture<AddmasjidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddmasjidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
