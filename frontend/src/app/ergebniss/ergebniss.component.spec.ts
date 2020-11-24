import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgebnissComponent } from './ergebniss.component';

describe('ErgebnissComponent', () => {
  let component: ErgebnissComponent;
  let fixture: ComponentFixture<ErgebnissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErgebnissComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErgebnissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
