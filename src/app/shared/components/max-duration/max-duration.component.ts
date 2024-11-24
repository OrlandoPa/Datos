import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-max-duration',
  templateUrl: './max-duration.component.html',
  styleUrls: ['./max-duration.component.scss'],
  imports: [
    CommonModule, FormsModule
  ],
  standalone: true
})
export class MaxDurationComponent {
  year: number = 2020;
  platform: string = 'netflix';
  type: string = 'min';
  result: any = null;

  constructor(private apiService: ApiService) {}

  search() {
    this.apiService.getMaxDuration(this.year, this.platform, this.type)
        .subscribe(data => this.result = data);
  }

}
