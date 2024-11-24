import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./genero.component.html",
  styleUrls: ["./genero.component.scss"]
})

export class GeneroComponent {
  genre: string = '';
  result: any = null;

  constructor(private apiService: ApiService) {}

  search() {
    this.apiService.getListedIn(this.genre)
      .subscribe(data => this.result = data);
  }


}
