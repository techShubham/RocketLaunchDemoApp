import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { RocketData } from '../rocket-data/rocket-data';

@Injectable({
  providedIn: 'root'
})
export class RocketListService {

  private _baseUrl : string = "https://api.spacexdata.com/v3/launches?limit=10"; 
  constructor( private _http : HttpClient) { }
  
  public getRocketData() : Observable<RocketData[]>{
    return this._http.get<RocketData[]>(this._baseUrl).pipe(catchError(this.handleError));
  }
  
  handleError(ex){
    if(ex instanceof HttpErrorResponse){
      console.log("Client Side Error" + ex);
    }
    else{
      console.log("Server Side Error" + ex);
    }
    return throwError(ex);
  }

}
