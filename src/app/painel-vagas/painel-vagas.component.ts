import { Component, OnInit } from '@angular/core';
import { Buscarvagas } from '../models/buscarvagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public Buscarvagas: Buscarvagas = new Buscarvagas(0, "", "", "","", 0);  

  constructor(private _vagasService: VagasService) {}

  ngOnInit(): void { }

  cadastrar() {
    this._vagasService.cadastrarVG(this.Buscarvagas).subscribe(
      buscarvagas => {this.Buscarvagas= new Buscarvagas(0, "", "", "","", 0);   },
      err => { console.log('erro ao cadastrar');
      }
    );

    window.location.href = '/mural';
  }

  atualizar(id: number) {
    this._vagasService.atualizarVG(id, this.Buscarvagas).subscribe(
      (buscarvaga) => {
        this.Buscarvagas = new Buscarvagas(0, "", "", "","", 0);
      },
      (err) => {
        console.log('erro ao atualizar');
      }
    );

    window.location.href = '/mural';
  }

  excluir(id: number) {
    this._vagasService.removerVG(id).subscribe(
      (buscarvaga) => {
        this.Buscarvagas = new Buscarvagas(0, '', '', '','', 0);
      },
      (err) => {
        console.log('erro ao Excluir');
      }
    );

    window.location.href = '/mural';
  }

}
