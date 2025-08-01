// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { InjectionToken } from '@angular/core';
// import { AuthComponent } from './auth.component';

// describe('AuthComponent', () => {
//   let component: AuthComponent;
//   let fixture: ComponentFixture<AuthComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AuthComponent, InjectionToken],
//     }).compileComponents();

//     fixture = TestBed.createComponent(AuthComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { MSAL_GUARD_CONFIG, MsalService } from '@azure/msal-angular';

// Mock MSAL Service
class MockMsalService {}

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [
        { provide: MsalService, useClass: MockMsalService },
        { provide: MSAL_GUARD_CONFIG, useValue: {} }, // FIX: must be in providers, not imports
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
