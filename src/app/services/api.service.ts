import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8000'; // URL de tu API FastAPI

  constructor(private http: HttpClient) {}

  getMaxDuration(year: number, platform: string, tipo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_max_duration/${year}/${platform}/${tipo}`);
  }

  getCountPlatform(platform: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_count_platform/${platform}`);
  }

  getListedIn(genre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_listedin/${genre}`);
  }

  getActor(platform: string, year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_actor/${platform}`, {
      params: new HttpParams().set('year', year.toString())
    });
  }


}
