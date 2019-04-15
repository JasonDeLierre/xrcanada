import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

let nextId = 1;

@Component({
  selector: 'app-donateqc',
  templateUrl: './donateqc.component.html',
  styleUrls: ['./donateqc.component.scss']
})

export class DonateqcComponent implements OnInit, AfterViewInit {

  id: string;

  constructor(private elementRef: ElementRef) {
    this.id = `actionnetwork_widget_${nextId++}`;
  }

  ngOnInit() {
    console.log('wth')

  }

  ngAfterViewInit() {
    const url = `https://actionnetwork.org/widgets/v3/fundraising/soutenez-financierement-extinction-rebellion-quebec?format=js&source=widget&can_widget_id=${this.id}`;
    const script = document.createElement('script');
    script.src = url;
    this.elementRef.nativeElement.appendChild(script);
  }
}
