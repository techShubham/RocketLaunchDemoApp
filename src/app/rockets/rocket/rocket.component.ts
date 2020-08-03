import { Component, OnInit, Input } from '@angular/core';
import { RocketData } from '../rocket-data/rocket-data';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  @Input() rocketData : RocketData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.rocketData);
  }

}
