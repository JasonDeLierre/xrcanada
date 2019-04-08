import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent {

  constructor(
    private router: Router,
  ){ console.log('ok!') }

  route(x:string){

    console.log('x', x)

    if(x=='qc')
      this.router.navigate(['/quebec'])
    if(x=='pei')
      this.router.navigate(['/pei'])
    if(x=='ns')
      this.router.navigate(['/nova-scotia'])
    if(x=='on')
      this.router.navigate(['/ontario'])
    if(x=='ab')
      this.router.navigate(['/alberta'])
    if(x=='bc')
      this.router.navigate(['/bc'])
  }
}
