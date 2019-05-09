import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.scss']
})
export class QuebecComponent implements OnInit {

  constructor(
    private router: Router,
    private trans: TranslateService
  ) { 

    if(navigator.language.split('-')[0] == 'fr')
      trans.setDefaultLang('fr')
    else
      trans.setDefaultLang('en')
  }

  ngOnInit() {
  }
}
