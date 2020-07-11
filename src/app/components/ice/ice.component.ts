import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IceService} from '../../service/ice.service';

@Component({
  selector: 'app-ice',
  templateUrl: './ice.component.html',
  styles: [
  ]
})
export class IceComponent implements OnInit {

  ice:any= {};

  constructor( private _ice: IceService, private route: ActivatedRoute) {

 this.route.params.subscribe( params => {
   //console.log(params['id']);
     this.ice= this._ice.getIce(params['id'])
     console.log(this.ice)

 })

   }

  ngOnInit(): void {



  }

}
