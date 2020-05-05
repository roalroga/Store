import { Persona } from './shared/persona.model';
import { Component, OnInit, Input } from '@angular/core';
import { Pais } from './shared/pais.model';
// import { Persona } from '../contenido/shared/persona.model';
import { PersonaService } from './shared/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {
  // @Input() nombre: string ;
  // @Input() apellido: string;
  personaEntidad: Persona;
  listaPersonas: Persona [];
  listaPaises: Pais [];
  porcentaje: number;
  datoList: any[] = [];
  constructor(public personaServicio: PersonaService) {
    this.personaEntidad = new Persona();
    this.listaPersonas = [];
    this.listaPaises = [];

    const paisB = new Pais();
    paisB.Nombre = "Bolivia";
    paisB.Color = "Verde";
    paisB.Capital = "Sucre";

    this.listaPaises.push(paisB);
    const paisP = new Pais();
    paisP.Nombre = "Peru";
    paisP.Color = "Rojo";
    paisP.Capital = "Lima";


    this.listaPaises.push(paisP);

    const paisC = new Pais();
    paisC.Nombre = "Argentina";
    paisC.Color = "Azul";
    paisC.Capital = "Sucre";

    this.listaPaises.push(paisC);
    console.log(this.listaPaises);
    // this.nombre = "hola mundo";
   }

  ngOnInit() {
    this.personaServicio.getCovidMundial().subscribe(
      dato => this.cargarDatos(dato)
    );
  }
  cargarDatos(dato){
    this.datoList = dato;
    console.log(this.datoList);
  }
  // seleccionado(event){
  //       console.log(event);
  // }
  abierto(){
    console.log("abierto");
  }
  cerrado(){
    console.log("cerrado");

  }
  guardar() {
    this.listaPersonas.push(this.personaEntidad);
    console.log(this.listaPersonas);
    this.porcentaje = (this.listaPersonas.length / 15) * 100;
    console.log(this.porcentaje);
    this.personaEntidad = new Persona();
  }
  getColor(pais: string){
    switch (pais){
      case 'Bolivia':
        return 'green';
      case 'Peru':
        return 'red';
      case 'Argentina':
        return 'blue';
    }
  }
  capturarPais(rspuesta: string){
    console.log(rspuesta);
    this.personaEntidad.Pais = rspuesta;
  }
  retornarPerson() : Persona{
    return this.personaEntidad;
  }

}
