import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IceService } from '../../service/ice.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  ices:any[]=[];
  termino: string;

  constructor(private route: ActivatedRoute, private _ice: IceService) {

    this.route.params.subscribe( params =>{

      this.termino = params['termino'];

      this.ices = this._ice.buscarIce(params['termino']);



      console.log(this.ices)

    })

   }

  ngOnInit(): void {
  }

}
