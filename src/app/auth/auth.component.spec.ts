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
import { MSAL_GUARD_CONFIG, MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// Mock MSAL Service
class MockMsalService {}

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [AuthComponent],
      imports: [AuthComponent, HttpClientTestingModule],
      providers: [
        { provide: MsalService, useClass: MockMsalService },
        { provide: MSAL_GUARD_CONFIG, useValue: {} }, // FIX: must be in providers, not imports
        { provide: MsalBroadcastService, useClass: MsalBroadcastService },
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
