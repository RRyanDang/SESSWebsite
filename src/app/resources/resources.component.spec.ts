import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesComponent } from './resources.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { By } from '@angular/platform-browser';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesComponent, BannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive inputs in the app-banner component',()=>{
    component.title = 'Test Title';
    component.bannerUrl = 'https://duckduckgo.com/?q=test+image&iar=images&t=ffab&iai=https%3A%2F%2Fglobal-uploads.webflow.com%2F619e15d781b21202de206fb5%2F6304ea816823cf0a4b06f777_what-is-testing.jpg';
    fixture.detectChanges();

    const bannerDebug = fixture.debugElement.query(By.directive(BannerComponent));
    const bannerInstance = bannerDebug.componentInstance as BannerComponent;

    expect(bannerInstance.title).toBe('Test Title')
    expect(bannerInstance.url).toBe('https://duckduckgo.com/?q=test+image&iar=images&t=ffab&iai=https%3A%2F%2Fglobal-uploads.webflow.com%2F619e15d781b21202de206fb5%2F6304ea816823cf0a4b06f777_what-is-testing.jpg')
  })
});
