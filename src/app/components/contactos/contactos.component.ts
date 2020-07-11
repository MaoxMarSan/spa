import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: [
  ]
})
export class ContactosComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido:'',
    email: '',
    paises:''
  }

  paises:any[]=[];


  constructor(private _country: CountryService) { }
  ngOnInit(): void {

    this._country.getCountry()
                .subscribe( paises => {
                  this.paises = paises;
                  console.log(this.paises)

                  this.paises.unshift({
                    name: 'Seleccione un pais',
                    abrev: ''
                  })
                })

      }

      guardar(f:NgForm){
        //console.log(f)
        console.log(f.value)
        if(f.invalid){
          Object.values(f.controls).forEach( resp =>{
            resp.markAllAsTouched();

          })
        }

      }


}
