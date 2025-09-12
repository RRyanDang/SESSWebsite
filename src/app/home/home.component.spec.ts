import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //###################### BEHAViORAL TESTS ######################

  it('should go to page About when Learn More button is clicked', () => {
    spyOn(component, 'navigateAbout');

    const button = fixture.nativeElement.querySelector('button.bg-red-600');
    button.click();

    expect(component.navigateAbout).toHaveBeenCalled();
  });
});
