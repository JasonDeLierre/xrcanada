import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public  router: Router,
    private trans: TranslateService
  ){
  
  console.log('def lang', navigator.language.split('-')[0] )

  if(navigator.language.split('-')[0] == 'fr')
    trans.setDefaultLang('fr')
  else
    trans.setDefaultLang('en')

  }

  translate(x) {
    console.log('x', x)
    if(x=='en') this.trans.setDefaultLang('en')
    else        this.trans.setDefaultLang('fr')
  }

  route(x:string) {
    console.log('x', x)
    this.router.navigate([x])
  }

  onBlog(){
    window.open("https://blog.extinctionrebellion.ca", "_blank");
  }
}
