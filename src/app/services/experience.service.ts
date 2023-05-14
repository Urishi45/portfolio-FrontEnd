import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experience } from '../experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'https://portfolio-backend-qe1p.onrender.com/experience'
  
  constructor(private http: HttpClient) { }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/all`)
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.apiUrl}/add`, experience)
  }

  updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiUrl}/update`, experience)
  }

  deleteExperience(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`)
  }
}
