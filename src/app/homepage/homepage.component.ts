import { Component, OnInit } from '@angular/core';

import { HeaderpageComponent } from '../headerpage/headerpage.component';
import { MainsectionComponent } from '../mainsection/mainsection.component';
import { SubscribesectionComponent } from '../subscribesection/subscribesection.component';
import { FootersectionComponent } from '../footersection/footersection.component';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
