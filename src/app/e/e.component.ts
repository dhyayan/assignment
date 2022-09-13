import { Component, OnInit } from '@angular/core';
import { PrintserviceService } from '../printservice.service';
@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.css']
})
export class EComponent implements OnInit {
printValue!:string;
  constructor(private PrintService:PrintserviceService) {
    this.printValue=this.PrintService.printContent;
   }

  ngOnInit(): void {
  }
sendNewValue(){

this.PrintService.contentUpdated.emit(this.printValue);
}
}
