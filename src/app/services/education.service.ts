import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Education } from '../education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = 'https://portfolio-backend-qe1p.onrender.com/education'
  
  constructor(private http: HttpClient) { }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/all`)
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiUrl}/add`, education)
  }

  updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/update`, education)
  }

  deleteEducation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`)
  }
}
