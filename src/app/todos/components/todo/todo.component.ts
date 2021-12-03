import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../types/todos.interface';

@Component({
  selector: 'app-todos-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input('todo') todoProps!: TodoInterface

  constructor() { }

  ngOnInit(): void {
  }

}
