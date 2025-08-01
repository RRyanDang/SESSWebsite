// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EventsComponent } from './events.component';

// describe('EventsComponent', () => {
//   let component: EventsComponent;
//   let fixture: ComponentFixture<EventsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [EventsComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(EventsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule, // Fix for NG05105 animation listener error
      ],
      declarations: [EventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
