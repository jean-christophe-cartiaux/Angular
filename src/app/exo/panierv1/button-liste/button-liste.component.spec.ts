import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonListeComponent } from './button-liste.component';

describe('ButtonListeComponent', () => {
  let component: ButtonListeComponent;
  let fixture: ComponentFixture<ButtonListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
