import { Action } from '@ngrx/store';
export const AGREGAR_TODO = "[TODO] Agregar Todo";
export const TOGGLE_TODO = "[TODO] Toggle Todo";
export const EDITAR_TODO = "[TODO] Editar Todo";
export const BORRAR_TODO = "[TODO] Borrar Todo";
export const TOGGLEALL_TODO = "[TODO] ToggleAll Todo";
export const BORRARALL_TODO = "[TODO] BorrarAll Todo";

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public nombre: string){ }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number){ }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto:string){ }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number){ }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLEALL_TODO;
    constructor(public estado: boolean){ }
}

export class BorrarAllTodoAction implements Action {
    readonly type = BORRARALL_TODO;
}

export type Acciones = AgregarTodoAction    |
                       ToggleTodoAction     |
                       EditarTodoAction     |
                       BorrarTodoAction     |
                       ToggleAllTodoAction  |
                       BorrarAllTodoAction;