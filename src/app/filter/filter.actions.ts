import { Action } from '@ngrx/store';

export const FILTRAR_TODO = "[FILTER] Filtrar Todo";
export type filtrosValidos = "Todo" | "Completo" | "Pendiente";

export class FilterTodoAction implements Action {
    readonly type = FILTRAR_TODO;
    constructor(public filtro: filtrosValidos){};
}

export type Acciones = FilterTodoAction;