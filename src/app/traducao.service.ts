import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Traducoes {
  [key: string]: string;
}
@Injectable({ providedIn: 'root' })
export class TraducaoService {
  private traduzSubject = new BehaviorSubject<{ [key: string]: string }>({});
  traduz$ = this.traduzSubject.asObservable();

  constructor(private http: HttpClient) {}

  traduzir(lang: string) {
    this.http.get<{ [key: string]: string }>(`/api/traducao/${lang}`)
      .subscribe({
        next: data => this.traduzSubject.next(data),
        error: err => console.error(err)
      });
  }
}

