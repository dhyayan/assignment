import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PrintserviceService {
printContent:string='';
  constructor() { }
contentUpdated=new EventEmitter();

}
