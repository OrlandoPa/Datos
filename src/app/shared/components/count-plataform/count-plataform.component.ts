import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import * as console from 'node:console';

@Component({
  selector: 'app-count-platform',
  templateUrl: './count-platform.component.html',
  styleUrls: ['./count-platform.component.scss'],
  standalone: true
})
export class CountPlatformComponent{
  platform: string = 'netflix'; // Plataforma predeterminada
  results: any[] = []; // Almacena los resultados de la API

  constructor(private apiService: ApiService) {}

  fetchCountPlatform(): void {
    this.apiService.getCountPlatform(this.platform).subscribe(
      (data) => {
        this.results = data;
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }

}
