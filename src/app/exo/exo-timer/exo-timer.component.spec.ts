import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoTimerComponent } from './exo-timer.component';

describe('ExoTimerComponent', () => {
  let component: ExoTimerComponent;
  let fixture: ComponentFixture<ExoTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoTimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExoTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
