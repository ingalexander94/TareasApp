import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { filtrosValidos, FilterTodoAction } from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';
import { BorrarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ],
})
export class TodoFooterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  filtros:filtrosValidos[] = ["Todo","Completo","Pendiente"];
  filtroActual: filtrosValidos;
  pendientes: number;

  ngOnInit(): void {
    this.store.subscribe( reducers => {
      this.filtroActual = reducers.filtro;
      this.contarPendientes(reducers.todos);
    });
  }

  cambiarFiltro = (nuevoFiltro:filtrosValidos) => {
    const accion = new FilterTodoAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes = (todo: Todo[]) => {
    this.pendientes = todo.filter(todo => !todo.completado).length;
  };

  limpiarTodos = () => {
    const accion = new BorrarAllTodoAction();
    this.store.dispatch(accion);
  }

}
