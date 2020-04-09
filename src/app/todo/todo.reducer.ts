import * as fromTodo from "./todo.actions";
import { Todo } from './model/todo.model';
import { getTodo } from './localStorage';

const estadoInicial: Todo[] = getTodo();

export const todoReducer = (state = estadoInicial, action: fromTodo.Acciones): Todo[] => {
    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.nombre);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);

        case fromTodo.TOGGLEALL_TODO:
            return state.map(todoReducer => {
                return {
                    ...todoReducer,
                    completado: action.estado
                }
            });

        case fromTodo.BORRARALL_TODO:
            return state.filter(todo => !todo.completado);

        default:
            return state;

    }
}