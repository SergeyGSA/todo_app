import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todos.interface';

@Component({
  selector: 'app-todos-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  visibleTodos$: Observable<TodoInterface[]>; 

  constructor(
    private todosService: TodosService
  ) 
  { 
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    )
    .pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter(todo => !todo.isCompleted)
        } else if (filter === FilterEnum.completed) {
          return todos.filter(todo => todo.isCompleted)
        }
        return todos
      })
    )
  }

  ngOnInit(): void {
  }

}
