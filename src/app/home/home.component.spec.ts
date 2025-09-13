import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// Mock child component
// @Component({selector: 'app-carousel', template: '', standalone: true})
// class MockCarousel {}

describe('HomeComponent', () => {

  // OLD VERSION without the app-carousel mock test 
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // let component: HomeComponent;
  // let fixture: ComponentFixture<HomeComponent>;

  // beforeEach(async () =>{
  //   await TestBed.configureTestingModule({
  //     imports: [HomeComponent],
  //     providers: [{provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])}],
  //   }).overrideComponent(HomeComponent, {
  //     remove: {imports:[]},
  //     add: {imports: [MockCarousel]},
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // })


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //###################### BEHAViORAL TESTS ######################

  //this checks if we route to the /about (Learn More is within it) if user clicks button
  it('should go to page Learn More when Learn More button is clicked', () => {
    spyOn(component, 'navigateAbout');

    const button = fixture.nativeElement.querySelector('button.bg-red-600');
    button.click();

    expect(component.navigateAbout).toHaveBeenCalled();
  });

  //this checks if we route to the /about (Get Involved is within it) if user clicks button
  it('should go to page Get Involve when Get Involved button is clicked', ()=>{
    spyOn(component, 'navigateGetInvolved')

    const button = fixture.nativeElement.querySelector('button.border-2');
    button.click()

    expect(component.navigateGetInvolved).toHaveBeenCalled();
  })

  // check if component: carousel is created
  // will use Mock for this
  // it('should render app-carousel inside Event Highlight section', () => {
  //   const carousel = fixture.nativeElement.querySelector('app-carousel');
  //   expect(carousel).toBeTruthy();
  // });
});
