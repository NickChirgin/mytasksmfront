import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Category } from './Category';
import { Todos } from './Todos';
import {  deserializeArray, instanceToInstance, instanceToPlain, plainToClass, plainToInstance } from 'class-transformer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {
  title = 'front';
  categories: Category[] = [];
  todos: Todos[] = [];
  
  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
  constructor(private http: HttpClient){}

  ngOnInit() {
      this.http.get<Category[]>('https://guarded-citadel-88203.herokuapp.com/projects').subscribe(data => {
        data.map(cat => this.categories.push(plainToInstance(Category, cat)))

        this.categories.forEach(el => console.log(el.getTitle()))
    });
      
    };
}


