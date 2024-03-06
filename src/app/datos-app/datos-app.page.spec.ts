import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosAppPage } from './datos-app.page';

describe('DatosAppPage', () => {
  let component: DatosAppPage;
  let fixture: ComponentFixture<DatosAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
