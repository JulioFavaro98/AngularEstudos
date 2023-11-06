import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformacoesSeparadasComponent } from '../exemplos/modelos/informacoes-separadas/informacoes-separadas.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/layout';

  constructor(private http: HttpClient) { }

  enviarString(string: string) {
    return this.http.post<InformacoesSeparadasComponent>(this.apiUrl, { dadosGerais: string });
  }
}
