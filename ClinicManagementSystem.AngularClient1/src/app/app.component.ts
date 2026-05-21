import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // 1. Ensure RouterModule is imported here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule // 2. Essential: This activates 'routerLink' and 'routerLinkActive' in your HTML
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClinicManagementSystem';
}