import { Component, OnInit } from '@angular/core';
import { PrintserviceService } from '../printservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
print!:string;
  constructor(private PrintService:PrintserviceService) { }

  ngOnInit(): void {
    this.print=this.PrintService.printContent;
    this.PrintService.contentUpdated.subscribe(
      (value:string)=>this.print=value
    );
  }

}
