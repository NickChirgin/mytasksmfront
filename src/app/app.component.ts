import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Category } from './Category';
import { Todos } from './Todos';
import { plainToInstance } from 'class-transformer';
import  {BehaviorSubject, Observable, of, switchMap } from 'rxjs'
import { EventEmitterService } from './event-emmiter.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {
  title = 'front';
  categories: Category[] = []
  todos: Todos[] = [];

  
  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
  constructor(private http: HttpClient, private eventEmitterService: EventEmitterService){}

  ngOnInit() {
    this.getCategories(this.categories)
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeAppComponentFunction.subscribe(() => {  
        this.categories = []
        this.ngOnInit(); 
        console.log(this.categories)   
      });    
      
    }

  
  
  }
  getCategories(category: Category[]){
    this.http.get<Category[]>('https://guarded-citadel-88203.herokuapp.com/projects').subscribe(data => {
        data.map(cat => category.push(plainToInstance(Category, cat)))
        
    })
  }
}
