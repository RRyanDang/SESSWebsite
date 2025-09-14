import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SecComponent } from './sec.component';

describe('SecComponent', () => {
  let component: SecComponent;
  let fixture: ComponentFixture<SecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // make sure there are TWO items in SecComponent
  it('should have 2 categories defined', () => {
    expect(component.categories.length).toBe(2);
  });

  // it('should render all categories in the template', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const titles = compiled.querySelectorAll('h2'); // adjust if your template uses <h2>, <div>, etc.
  //   expect(titles.length).toBe(2);
  //   expect(titles[0].textContent).toContain('Programming');
  //   expect(titles[1].textContent).toContain('Re-Engineering');
  // });

  // it('should render the same number of sections as categories', () => {
  //   const sections = fixture.debugElement.queryAll(By.css('section'));
  //   expect(sections.length).toBe(component.categories.length);
  // });

  // it('should render titles for all categories', () => {
  //   const titles = fixture.debugElement.queryAll(By.css('h1.text-2xl'));
  //   titles.forEach((titleEl, i) => {
  //     expect(titleEl.nativeElement.textContent).toContain(component.categories[i].title);
  //   });
  // });

  // it('should render details and descriptions for all categories', () => {
  //   const paragraphs = fixture.debugElement.queryAll(By.css('p.text-lg.font-light'));
  //   // Each category has 2 <p>: details + description
  //   component.categories.forEach((cat, i) => {
  //     const detailsIndex = i * 2;
  //     const descIndex = detailsIndex + 1;

  //     expect(paragraphs[detailsIndex].nativeElement.textContent).toContain(cat.details);
  //     expect(paragraphs[descIndex].nativeElement.textContent).toContain(cat.description);
  //   });
  // });

  // it('should render images for all categories', () => {
  //   const images = fixture.debugElement.queryAll(By.css('img'));
  //   images.forEach((imgEl, i) => {
  //     expect(imgEl.nativeElement.src).toContain(component.categories[i].image);
  //   });
  // });

//   it('should apply reverse class on every even index', () => {
//   const sections = fixture.debugElement.queryAll(By.css('section'));

//   sections.forEach((section, i) => {
//     const classList = section.nativeElement.classList;

//     if (i % 2 === 1) {
//       expect(classList).toContain('md:flex-row-reverse');
//     } else {
//       expect(classList).not.toContain('md:flex-row-reverse');
//     }
//   });
// });


});
