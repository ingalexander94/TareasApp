import { Todo } from './model/todo.model';

export const setTodo = (todo:Todo[]) => {
    localStorage.setItem("TODOS",JSON.stringify(todo));
};

export const getTodo = ():Todo[] => {
    const todos = localStorage.getItem("TODOS");
    if(todos){
        const arreglo: Todo[] = JSON.parse(todos);
        return arreglo;
    }else{
        const defecto: Todo[] = [] ;
        return defecto;
    }
};


