import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index:number=0;
   answer:number | undefined;
   clicked=false;
  constructor() { }

  ngOnInit(): void {
  }
showValue(index:number):void{
  index++;
  this.clicked=true;

if (index%2==0){
  this.answer=(index*index)-1
}
else{
  this.answer=(index*index)+1
}


}







}
