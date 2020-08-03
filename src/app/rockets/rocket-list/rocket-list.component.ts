import { Component, OnInit } from '@angular/core';
import { RocketListService } from './rocket-list.service';
import {} from '@angular/common/http';
import {} from 'rxjs';
import { RocketData } from '../rocket-data/rocket-data';

@Component({
  selector: 'rocket-list',
  templateUrl: './rocket-list.component.html',
  styleUrls: ['./rocket-list.component.css']
})
export class RocketListComponent implements OnInit {
  rockets : RocketData[] =[];
  error : any;
  constructor(private _rocketListService : RocketListService) { }

  ngOnInit(): void {
    this.ApplyFilters();
  }
  
  ApplyFilters(){
    this._rocketListService.getRocketData().subscribe({
      next : rockets => this.OnGetRocketDataSuccess(rockets),
      error : err => this.OnGetRocketDataFailure(err)
    });
  }
  OnGetRocketDataSuccess(_rockets : RocketData[]){
    this.rockets = _rockets;
  }
  OnGetRocketDataFailure(_error : any){
    this.error = _error;
    console.log(this.error);
  }
}


