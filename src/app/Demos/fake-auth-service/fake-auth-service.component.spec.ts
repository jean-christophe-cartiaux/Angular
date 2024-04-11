import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeAuthServiceComponent } from './fake-auth-service.component';

describe('FakeAuthServiceComponent', () => {
  let component: FakeAuthServiceComponent;
  let fixture: ComponentFixture<FakeAuthServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeAuthServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FakeAuthServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
