import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile = false

  constructor(
    private router: Router
  ) { 
    if(screen.width < 800)
      this.isMobile = true
      console.log('heck ya!')
  }

  ngOnInit() {
  }

  join() {
    this.router.navigate(['/join'])
  }
}
