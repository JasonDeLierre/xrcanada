import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

let nextId = 1;

@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.css']
})
export class QuebecComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  donate(){
    this.router.navigate(['/quebec/donate'])
    console.log('yip')

  }

}
