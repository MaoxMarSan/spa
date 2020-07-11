import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {  }


  getCountry(){

    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
                    .pipe(map((resp:any[]) =>{
                      return resp.map( pais => ({name:pais.name, abrev: pais.alpha3Code, capital:pais.capital, country:pais.nativeName }) )
                    }))

  }


}
