import { Component, OnInit } from '@angular/core';
import {FormControl, FormArray,  FormGroup} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
list!:FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.list=new FormGroup({
      numbers: new FormArray([new FormControl()])

    })


  }

addNumber(){
  console.log('adding');
  const control= new FormControl();
 (<FormArray>this.list.get('numbers')).push(control);

}
getControls(){
  return(this.list.get('numbers')as FormArray).controls;
}
onSubmit(){
  let c=1;

  for (let number of this.list.value.numbers){
    console.log("phonenumber"+c+":",number);
    c++;
  }
  }
}

