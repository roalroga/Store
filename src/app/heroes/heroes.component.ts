import { Component, OnInit } from "@angular/core";
import { HeroesService} from "../servicios/heroes.service";
import { Heroe } from '../servicios/heroes.model';

import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private HeroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this.HeroesService.getHeroes();
     console.log(this.heroes);
  }

  public verHeroe(nombrex: string) {
    console.log(nombrex);
    this.router.navigate(["/Heroe", nombrex]);
  }
}
