import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/etudiants')
      .pipe(
        catchError(error => {
          console.error('Error fetching etudiants:', error);
          return throwError(error);
        })
      );
  }
}
