import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name ='';
  public password = '';
  public vehicles = ['Toyota','Honda','Nissan','Ford','Porsche'];
  public selectvehicles ='';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(){
    console.log('onsubmit')
    console.log('name= ' + this.name);
    console.log('password' + this.password);
    console.log('selectvehicles' + this.selectvehicles);
  }
  public selectedvehicles(event){
    console.log(event);
  }

}
