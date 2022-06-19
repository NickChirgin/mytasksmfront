
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { text } from 'express';
import { Todos } from '../Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {
  @Input() text!: Todos;
  id?: number
  categoryId?: number
  checked?: boolean
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.checked = this.text.isDone()
  }
  clickHandler(){
    this.id = this.text.getId()
    this.categoryId = this.text.getCategoryId()
    this.http.patch(`https://guarded-citadel-88203.herokuapp.com/projects/${this.categoryId}/todos/${this.id}`, [this.categoryId, this.id]).subscribe()
    
    this.checked = !this.checked
    
  }

}
