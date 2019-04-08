import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private trans: TranslateService
  ){

    trans.setDefaultLang('en')

  }

  translate(x){
    console.log('x', x)
    if(x=='en') this.trans.setDefaultLang('en')
    else        this.trans.setDefaultLang('fr')
  }

  route(x:string){

    console.log('x', x)

    if(x=='m')
      this.router.navigate(['/'])
    if(x=='w')
      this.router.navigate(['/who'])
    if(x=='d')
      this.router.navigate(['/demands'])
    if(x=='p')
      this.router.navigate(['/principles'])
    if(x=='j')
      this.router.navigate(['/join'])
    if(x=='a')
      this.router.navigate(['/media'])
    if(x=='v')
      this.router.navigate(['/provinces'])

  }
}
