import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./app.component.scss']
})
export class PrincipalComponent implements OnInit {
  title = 'Proyecto de Plataforma de Streaming';

  ngOnInit(): void {
  }
}
