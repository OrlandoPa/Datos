import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  title = 'Proyecto de Plataforma de Streaming';
}

