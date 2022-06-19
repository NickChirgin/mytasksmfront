import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatDialog} from '@angular/material/dialog'
import { FormComponent } from '../form/form.component';
import { Category } from '../Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() categories: Category[] = []
  title: string = '+'
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(FormComponent, {
      width:'350px',
      data:this.categories
    })
    console.log('click clack')
  }
}
