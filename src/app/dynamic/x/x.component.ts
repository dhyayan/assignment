import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {
count=[0];
@ViewChild('pname') nameInputRef!:ElementRef;
c=0;
panelName:string='';
names:string[]=[];
nameAdded=false;
nameSaved=false;
  constructor() { }

  ngOnInit(): void {
  }
createY(){

  this.count.push(this.count[this.c]+1);

  this.c++;
}
onSave(){
this.panelName=this.nameInputRef.nativeElement.value;
this.nameSaved=true;
}
onEdit(){
this.nameSaved=false;

}
onNameAdded(name:string){
  this.nameAdded=true;
this.names.push(name);
}
}
