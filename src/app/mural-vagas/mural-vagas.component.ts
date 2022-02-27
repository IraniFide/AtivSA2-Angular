import { Component, OnInit } from '@angular/core';
import { Buscarvagas } from '../models/buscarvagas.models';
import { VagasService } from '../vagas.service';


@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public Buscarvagas: Buscarvagas[] = [];
  

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas() {
    this._vagasService.getbuscarvagas()
      .subscribe(
        retornabuscarvagas => {
        this.Buscarvagas = retornabuscarvagas.map(
          item => {
            return new Buscarvagas(
              item.id,
              item.Vaga,
              item.Fotos,
              item.reqNecessarios,
              item.reqDesejado,
              item.salario

            );
          }
        )
      }
    )
  }
}




