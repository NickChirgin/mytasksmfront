import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './Category';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {
  title = 'front';
  cat: Category | undefined;
  
  headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json'}  )
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<Category>('https://guarded-citadel-88203.herokuapp.com/projects', {headers: this.headers}).subscribe((data: any) => this.cat= new Category(data.id, data.title)); 
  }
}
