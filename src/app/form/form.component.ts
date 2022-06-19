import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Inject, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { Category } from '../Category';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() categories: Category[] = []
  name!: FormGroup
  selected: string = ''
  value?: string
  add: string = '123'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private ref: ChangeDetectorRef) { }
  condition: boolean = false
  ngOnInit(): void {
    this.name = new FormGroup({
      text: new FormControl(null),
      category: new FormControl(null),
      newCategory: new FormControl(null)
      
    
    });

  }
  extendForm(){
    this.condition = true
    console.log(this.selected, typeof(this.selected))
  }
  shortenedForm(){
    this.condition = false
    console.log(this.selected, typeof(this.selected))
  }

  createTodo(){
    const body = {title: this.selected === "AddNewCategory"? this.name.value.newCategory : this.selected, text: this.name.value.text}
    this.http.post('https://guarded-citadel-88203.herokuapp.com/todos/', body).subscribe(data => {message: 'ok'})
    window.location.reload
    };
  }
  
  
