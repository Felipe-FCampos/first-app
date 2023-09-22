import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  
  //apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZF9wYXJ0eV9hcHBfaWQiOjEwOTcyNjEyNzUsImNyZWF0ZWRfYXQiOiIyMDIzLTA5LTIwVDIzOjA3OjA1Ljg5OTk4N1oiLCJpc190aGlyZF9wYXJ0eV9hY2Nlc3MiOnRydWV9.37TjGPOlcUyws7ZmcvAJSUb5U9AXPSM5ukm2cdz140o';
  url = 'https://imobz.in/Gt513FMR_properties';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getHouseById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/house/${id}`);
  }
}
