import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buscarvagas } from './models/buscarvagas.models';


@Injectable({
  providedIn: 'root'
})
export class VagasService {
  static getbuscarvagas() {
    throw new Error('Method not implemented.');
  }

  private url ="http://localhost:3000/buscarvagas";

  constructor(private _httpClient: HttpClient) { }

getbuscarvagas(): Observable<Buscarvagas[]> {
  return this._httpClient.get<Buscarvagas[]>(this.url);
}

cadastrarVG(Buscarvaga: Buscarvagas):Observable<Buscarvagas[]>{
  return this._httpClient.post<Buscarvagas[]>(this.url,Buscarvaga);
}

atualizarVG(id:any ,Buscarvagas:Buscarvagas):Observable<Buscarvagas[]>{
  const urlAtualizar = `${this.url}/${id}`;
  return this._httpClient.put<Buscarvagas[]>(urlAtualizar,Buscarvagas);
}

removerVG(id:any):Observable<Buscarvagas[]>{
  const urlDeletar = `${this.url}/${id}`;
  return this._httpClient.delete<Buscarvagas[]>(urlDeletar);
}
  
}
