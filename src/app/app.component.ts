// import { Component, OnInit } from '@angular/core';
// // import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { initFlowbite } from 'flowbite';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, HeaderComponent, FooterComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   title = "Seneca Engineering Students' Society";

//   ngOnInit(): void {
//     initFlowbite();
//   }
// }

import { Component } from '@angular/core';
// import { BannerComponent } from '../shared/banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'Contact Us';
  // bannerUrl =
  //   'https://www.nakdesignstrategies.com/cms/wp-content/uploads/2018/07/1723-001_2x1-1200x600.jpg';
}
