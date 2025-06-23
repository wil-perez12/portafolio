import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from "./Pages/Shared/header-nav/header-nav.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
