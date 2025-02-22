import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Latest';
}
