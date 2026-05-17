import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 1. Import the routing module

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // 2. Add it to the imports array here!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClinicManagementSystem.AngularClient';
}