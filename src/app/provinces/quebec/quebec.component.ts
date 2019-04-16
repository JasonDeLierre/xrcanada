import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.scss']
})
export class QuebecComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
