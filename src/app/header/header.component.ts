import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  title: string = '+'
  constructor() { }

  ngOnInit(): void {
  }

}
