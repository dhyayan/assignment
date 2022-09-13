import { Component, OnInit } from '@angular/core';
import { PrintserviceService } from '../printservice.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
print!:string;
  constructor(private PrintService:PrintserviceService) {
    this.print=this.PrintService.printContent;
   }

  ngOnInit(): void {
    this.print=this.PrintService.printContent;
    this.PrintService.contentUpdated.subscribe(
      (value:string)=>this.print=value
    );
  }

}
