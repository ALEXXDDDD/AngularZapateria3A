import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistZapatoComponent } from './vist-zapato.component';

describe('VistZapatoComponent', () => {
  let component: VistZapatoComponent;
  let fixture: ComponentFixture<VistZapatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistZapatoComponent]
    });
    fixture = TestBed.createComponent(VistZapatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
