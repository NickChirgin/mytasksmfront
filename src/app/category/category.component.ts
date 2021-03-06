import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../Todos';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {
  @Input() title!: string;
  @Input() todos!: Todos[];
  constructor() { }

  ngOnInit(): void {
  }

}
