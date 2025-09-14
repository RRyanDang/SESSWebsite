import { Component } from '@angular/core';

@Component({
  selector: 'app-footer', //define <custome-name> HTML tag
  standalone: true, //make it standalone, meaning not from NgModule
  imports: [], //other dependencies, child comp.
  templateUrl: './footer.component.html', //the HTML for this comp.
  styleUrls: ['./footer.component.css'], //CSS file
})
export class FooterComponent {} //export to be used in .component.spec.ts

//a very standard set-up for each component with static HTML
//the footer component is purely static, no other things or methods whatsoever
