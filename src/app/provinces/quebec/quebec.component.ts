import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

let nextId = 1;

@Component({
  selector: 'app-quebec',
  templateUrl: './quebec.component.html',
  styleUrls: ['./quebec.component.css']
})
export class QuebecComponent implements OnInit, AfterViewInit {

  id: string;

  constructor(private elementRef: ElementRef) {
    this.id = `actionnetwork_widget_${nextId++}`;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const url = `https://actionnetwork.org/widgets/v3/fundraising/soutenez-financierement-extinction-rebellion-quebec?format=js&source=widget&can_widget_id=${this.id}`;
    const script = document.createElement('script');
    script.src = url;
    this.elementRef.nativeElement.appendChild(script);
  }
}
