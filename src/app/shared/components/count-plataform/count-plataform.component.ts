import {Component} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-count-platform',
  imports: [CommonModule, FormsModule],
  templateUrl: './count-plataform.component.html',
  styleUrls: ['./count-plataform.component.scss'],
  standalone: true
})


export class CountPlatformComponent{
  platform: string = 'netflix';
  result: any = null;

  constructor(private apiService: ApiService) {}

  search() {
    this.apiService.getCountPlatform(this.platform)
      .subscribe(data => this.result = data);
  }

}
