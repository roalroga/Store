import { Component, OnInit } from '@angular/core';
import { CoronaService } from './shared/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css'],
  providers: [CoronaService]
})
export class CoronaComponent implements OnInit {
  datoList: any[] = [];
  constructor(public coronaServicio: CoronaService) {
   }

  ngOnInit() {
    this.coronaServicio.getCovidMundial().subscribe(
      dato => this.cargarDatos(dato)
    );
  }
  cargarDatos(dato){
    this.datoList = dato;
    console.log(this.datoList);
  }

}
