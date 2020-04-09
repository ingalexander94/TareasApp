import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filter/filter.actions';
import { todoReducer } from './todo/todo.reducer';
import { filtroReducer } from './filter/filter.reducer';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos
}

export const reducersCombinados : ActionReducerMap<AppState> = {
  todos : todoReducer,
  filtro: filtroReducer
}