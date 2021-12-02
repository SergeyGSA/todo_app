import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoInterface } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([])

  constructor() { }

  public addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false
    }
    const updatedTodo = [...this.todos$.getValue(), newTodo]
    this.todos$.next(updatedTodo)
  }
}
