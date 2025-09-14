import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

//HttpClientTestingModule is for when we want to inject HttpClient or make HttpClient call
//import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render profile data', () => {
  //   component.profile = {
  //     givenName: 'John',
  //     surname: 'Doe',
  //     userPrincipalName: 'john@example.com',
  //     id: '123'
  //   };
  //   fixture.detectChanges();

  //   const text = fixture.nativeElement.textContent;
  //   expect(text).toContain('John');
  //   expect(text).toContain('Doe');
  //   expect(text).toContain('john@example.com');
  //   expect(text).toContain('123');
  // });
});
