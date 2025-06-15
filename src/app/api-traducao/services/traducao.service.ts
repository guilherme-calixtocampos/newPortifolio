import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TraducaoService {
  // Define um BehaviorSubject para armazenar e emitir traduções
  private traducoesSubject = new BehaviorSubject<any>(null);
  public traducoes$ = this.traducoesSubject.asObservable();

  private apiUrl = 'http://localhost:3000/traduzir';

  constructor(private http: HttpClient) {}

  traduzir(idioma: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { idioma }).pipe(
      tap(trad => this.traducoesSubject.next(trad)),
      catchError(err => {
        console.error('Erro ao traduzir', err);
        // Continua emitindo o último valor, mesmo com erro
        return of(this.traducoesSubject.value);
      })
    );
  }
}
