import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
import { Category } from './Category';
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeAppComponentFunction = new EventEmitter();    
  subsVar?: Subscription;    
    
  constructor() { }    
    
  onFirstComponentButtonClick(categories: Category[]) {    
    this.invokeAppComponentFunction.emit(categories);    
  }    
} 