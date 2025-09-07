import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeEl = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display address text', () => {
    const text = nativeEl.textContent || '';
    expect(text).toContain('Seneca Engineering Students\' Society');
    expect(text).toContain('1750 Finch Ave. East');
  });

  it('should have Instagram and YouTube links', () => {
    const links = Array.from(nativeEl.querySelectorAll('a')).map(a => (a as HTMLAnchorElement).href);
    expect(links.some(href => href.includes('instagram.com/seneca.engsoc'))).toBeTrue();
    expect(links.some(href => href.includes('youtube.com/@SenecaEngSoc'))).toBeTrue();
  });
});
