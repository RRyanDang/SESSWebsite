// src/test-setup.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MSAL_INSTANCE, MsalService, MsalBroadcastService } from '@azure/msal-angular';

// Minimal mock MSAL instance (so tests won't try to hit the network)
const mockMsalInstance = {};

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      { provide: MSAL_INSTANCE, useValue: mockMsalInstance },
      MsalService,
      MsalBroadcastService
    ]
  });
});
