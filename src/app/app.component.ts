import { Component } from '@angular/core';
import { HeaderNavComponent } from "./Pages/Shared/header-nav/header-nav.component";
import { InicioComponent } from './Pages/Shared/inicio/inicio.component';


@Component({
  selector: 'app-root',
  imports: [HeaderNavComponent,InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
