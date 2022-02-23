import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { buscarvagas } from './models/buscarvagas.models';


@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url ="http://localhost:3000/buscarvagas.db.json";

  constructor(private _httpClient: HttpClient) { }
getbuscarvagas(): Observable<buscarvagas[]>{
  return this._httpClient.get<buscarvagas[]>(this.url);
}
  
}
