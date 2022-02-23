export class buscarvagas{
    
    id: number = 0;
    Vaga: string = " ";
    Fotos: string= " ";
    reqNecessarios: string = "";
    reqDesejado: string = "";
    salario: number= 0;

    constructor(id:number,Vaga:string,Foto:string,reqNecessarrios:string,reqDesejado:string,salario:number){
        this.id = 0
        this.Vaga = Vaga;
        this.Fotos = Foto;
        this.reqDesejado = reqDesejado;
        this.reqNecessarios = reqNecessarrios;        
        this.salario = salario;
    }

}