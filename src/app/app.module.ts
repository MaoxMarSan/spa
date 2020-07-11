import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
//rutas
import { APP_ROUTING } from './app.route';

//service
import { IceService } from './service/ice.service';
import { CountryService } from './service/country.service';




//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IcesComponent } from './components/ices/ices.component';
import { IceComponent } from './components/ice/ice.component';
import { IceTarjetComponent } from './components/ice-tarjet/ice-tarjet.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactosComponent,
    FooterComponent,
    IcesComponent,
    IceComponent,
    IceTarjetComponent,
    BuscadorComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [ IceService, CountryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
