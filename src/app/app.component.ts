import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public activeRoute: string;

  constructor(
    private router: Router,
    private trans: TranslateService
  ) {
    trans.setDefaultLang('en')

    this.activeRoute = location.pathname
  }

  translate(x) {
    console.log('x', x)
    if(x=='en') this.trans.setDefaultLang('en')
    else        this.trans.setDefaultLang('fr')
  }

  route(x:string) {
    console.log('x', x)
    this.router.navigate([x])
    this.activeRoute = x
  }
}
