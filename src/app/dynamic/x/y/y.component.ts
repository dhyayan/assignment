import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {
  @ViewChild('uname') nameInputRef!:ElementRef;
  @Output() nameAdded= new EventEmitter <string>();
nameSaved=false;
  constructor() { }

  ngOnInit(): void {
  }
  saveName(){
    let uname=this.nameInputRef.nativeElement.value;
    this.nameAdded.emit(uname);
    this.nameSaved=true;

  }

}
