import { RouterModule, Routes } from '@angular/router';
import {  HomeComponent } from './components/home/home.component';
import {  ContactosComponent } from './components/contactos/contactos.component';
import {  NavbarComponent } from './components/shared/navbar/navbar.component';
import {  BuscadorComponent } from './components/buscador/buscador.component';
import {  FooterComponent } from './components/shared/footer/footer.component';


import {  IceComponent } from './components/ice/ice.component';
import {  IcesComponent } from './components/ices/ices.component';
import {  IceTarjetComponent } from './components/ice-tarjet/ice-tarjet.component';


const APP_ROUTES: Routes = [
{path: 'home', component: HomeComponent},
{path: 'footer', component: FooterComponent},
{path: 'contactos', component: ContactosComponent},
{path: 'navbar', component: NavbarComponent},
{path: 'buscador/:termino', component: BuscadorComponent},
{path: 'ice/:id', component: IceComponent},
{path: 'ices', component: IcesComponent},
{path: 'icetarjet', component: IceTarjetComponent},
{path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING =  RouterModule.forRoot(APP_ROUTES);
