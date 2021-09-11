import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 10;
  constructor() {}

  public tangtuoi(){
    this.age ++;
   //  this.vehicles.push(this.name + ':' + this.age);
   }
}
