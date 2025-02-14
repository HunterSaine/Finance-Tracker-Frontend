import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  getAssets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/assets`);
  }

  postAsset(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/assets`, data);
  }
}
