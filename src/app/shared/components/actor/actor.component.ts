import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  platform: string = 'netflix';
  year: number = 2020;
  result: any = null;

  constructor(private apiService: ApiService) {}

  search() {
    this.apiService.getActor(this.platform, this.year)
      .subscribe(data => this.result = data);
  }

}
