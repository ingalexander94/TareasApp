import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { filtrosValidos } from '../../filter/filter.actions';
import { setTodo } from '../localStorage';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ],
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.todos = state.todos;
      setTodo(this.todos);
      this.filtro = state.filtro;
    });
  }

}
