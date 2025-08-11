//very standard line for setting test cases
import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';
import { provideRouter } from '@angular/router';

//describe-it is a Jasmine syntax for writing test cases 
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  //set up before running test like import
  beforeEach(async () => {
    await TestBed.configureTestingModule({ //configureTestingModule is for creating a env for test
      imports: [AboutComponent], //standalone comp.
      providers: [provideRouter([])], //mock/service whatever comp. needs
    }).compileComponents();

    //fixture holds comp. instance (for testing logic) and rendered DOM
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); //important to call detectChanges()
  });

  it('should create', () => {
    //minimum test, ensure ANgular creates comp. without crashing
    expect(component).toBeTruthy();
  });
});
