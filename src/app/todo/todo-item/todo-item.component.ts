import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ],
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  editando: boolean;
  @ViewChild('txtEdit') txtEdit: ElementRef;
  chkTodo: FormControl;
  txtEditTodo: FormControl;

  constructor(private store: Store<AppState>) {

  }


  ngOnInit(): void {
    this.chkTodo = new FormControl(this.todo.completado);
    this.txtEditTodo = new FormControl(this.todo.texto, Validators.required);
    this.chkTodo.valueChanges.subscribe( () => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar = () => {
    this.editando = true;
    setTimeout(() => {
      this.txtEdit.nativeElement.select();
    }, 1);
  }

  terminarEdicion = () => {
    this.editando = false;
    if(this.txtEditTodo.invalid || this.txtEditTodo.value === this.todo.texto){
      return; 
     }
     const accion = new EditarTodoAction(this.todo.id, this.txtEditTodo.value);
     this.store.dispatch(accion);
  };

  eliminarTodo = ()=>{
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }


}
