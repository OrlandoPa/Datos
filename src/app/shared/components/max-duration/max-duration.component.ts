import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-max-duration',
  templateUrl: './max-duration.component.html',
  styleUrls: ['./max-duration.component.scss'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class MaxDurationComponent {
  year: number = 2022;
  platform: string = 'netflix';
  tipo: string = 'min'; // Puede ser 'min' o 'season'
  result: any = null; // Almacena el resultado de la API

  constructor(private apiService: ApiService) {}

  // Método para consultar el endpoint
  fetchMaxDuration(): void {
    this.apiService.getMaxDuration(this.year, this.platform, this.tipo).subscribe(
      (data) => {
        this.result = data; // Guardar la respuesta de la API
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
