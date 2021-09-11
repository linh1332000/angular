import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Linh';
  public age ;
  public vehicles = ['Toyota','Honda','Nissan','Ford','Porsche'];

  constructor(private common: CommonService) {
    this.age =  common.age;
   }
  public tangtuoi(){
  this.common.age ++;
  this.age = this.common.age;
  //  this.vehicles.push(this.name + ':' + this.age);
  }
  ngOnInit(): void {
  }

}
