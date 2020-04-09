import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { AgregarTodoAction } from '../todo.actions';
import { Todo } from '../model/todo.model';
import { setTodo } from '../localStorage';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [
  ],
})

export class TodoAddComponent implements OnInit {

  texto: string = "";
  todos : Todo[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("todos").subscribe(todos => {
      this.todos = todos;
      setTodo(this.todos);
    });
  }

  agregarTodo = (texto:string)=> {
    if(texto.trim() === ""){
      this.texto = "";
      return;
    }
    const accion = new AgregarTodoAction(texto);
    this.texto = "";
    this.store.dispatch(accion); 
  }

}
