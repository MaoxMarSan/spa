import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IceService, Ice} from '../../service/ice.service';

@Component({
  selector: 'app-ice-tarjet',
  templateUrl: './ice-tarjet.component.html',
  styles: [
  ]
})
export class IceTarjetComponent implements OnInit {

  ices:Ice[]= [];

  constructor( private _ice : IceService,
               private route: ActivatedRoute ) {


   }

  ngOnInit(): void {

    this.ices = this._ice.getIces();
    //console.log(this.ices);


  }

  verMas(){

  }

}
