import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
count=[0];
c=0;
  constructor() { }

  ngOnInit(): void {
  }
addComponentX(){
this.count.push(this.count[this.c]+1);
this.c++;
console.log(this.count[this.c]+1);
console.log(this.c)
}
}
