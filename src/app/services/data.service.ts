import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { Data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://portfolio-backend-qe1p.onrender.com/data'

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`${this.apiUrl}/all`)
  }

  updateData(data: Data): Observable<Data> {
    return this.http.put<Data>(`${this.apiUrl}/update`, data)
  }
}
