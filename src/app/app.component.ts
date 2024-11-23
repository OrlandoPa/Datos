import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {FooterComponent} from './shared/components/footer/footer.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DATOS GRUPO 10';
}