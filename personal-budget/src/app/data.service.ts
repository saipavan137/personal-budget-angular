// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/budget'; // Replace with your actual backend API URL
  private chartData: any[] = [];

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Adjust the API endpoint accordingly
  }

  setChartData(data: any[]): void {
    this.chartData = data;
  }

  getChartData(): any[] {
    return this.chartData;
  }
}
