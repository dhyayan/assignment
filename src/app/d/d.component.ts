import { Component, OnInit } from '@angular/core';
import { PrintserviceService } from '../printservice.service';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {
print!:string;
  constructor(private PrintService:PrintserviceService) {
  }

  ngOnInit(): void {
    this.print=this.PrintService.printContent;
    this.PrintService.contentUpdated.subscribe(
      (value:string)=>this.print=value
    );
  }

}
