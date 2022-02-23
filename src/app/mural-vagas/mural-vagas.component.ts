import { Component, OnInit } from '@angular/core';
import { buscarvagas } from '../models/buscarvagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

public buscarvagas: buscarvagas[]=[];  
  _vagasService: any;

  constructor(private_vagasSevice: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  listarVagas(){
    this._vagasService.getbuscarvagas()
    .subscribe( (retornaBuscarvagas: any[]) => {
      this.buscarvagas = retornaBuscarvagas.map(
        item=> {return new buscarvagas(
          item.id,
          item.Vaga,
          item.Foto,
          item.reqNecessarios,
          item.reqDesejado,
          item.salario
          
        ); }
        
      )
    

    }
    )

     
       {
          }
        
      }
    
  }


