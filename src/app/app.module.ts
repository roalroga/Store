import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { CoronaComponent } from "./corona/corona.component";
import { HeroesComponent } from "./heroes/heroes.component";

import { RouterModule } from "@angular/router";
import { PersonaComponent } from './persona/persona.component';
import { DestacarpalabraDirective } from './recursos/destacarpalabra.directive';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { FeaturesComponent } from './features/features.component';


// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeroesDirective } from './heroes-directive/heroes.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    CoronaComponent,
    PersonaComponent,
    DestacarpalabraDirective,
    HeaderMobileComponent,
    FeaturesComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    BuscadorComponent,
    HeroesDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    RouterModule.forRoot([
      { path: "corona", component: CoronaComponent },
      { path: "persona", component: PersonaComponent },
      { path: "features", component: FeaturesComponent },
      { path: "heroes", component: HeroesComponent },
    ]),
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
