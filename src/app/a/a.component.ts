import { Component, OnInit } from '@angular/core';
import { PrintserviceService } from '../printservice.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
print!:string;
  constructor(private PrintService:PrintserviceService) { }

  ngOnInit(): void {
    this.print=this.PrintService.printContent;
    this.PrintService.contentUpdated.subscribe(
      (value:string)=>this.print=value
    );
  }

}
