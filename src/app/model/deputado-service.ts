import { inject, Injectable } from '@angular/core';
import { Deputado } from './deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  //inject(HttpClient) cria o objeto do serviço HttpClient
  private http = inject(HttpClient)
  private APIURL = 'https://dadosabertos.camara.leg.br/api/v2'
  private deputados: Deputado[] = [];

  obterDeputados(): Observable<any> {
    return this.http.get(
      `${this.APIURL}/deputados?ordem=ASC&ordenarPor=nome`)
  }
  obterDeputadosPorNome(nome: string): Observable<any> {
    const q = encodeURIComponent(nome);
    return this.http.get(`${this.APIURL}/deputados?nome=${q}`);
  }

  obterDespesasPorId(id: number) {
    // método existente preservado para possíveis usos futuros
    return this.http.get(`${this.APIURL}/deputados/${id}/despesas`);
  }
}
