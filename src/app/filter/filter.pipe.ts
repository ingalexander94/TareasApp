import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filtrarTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todo:Todo[], filtro:filtrosValidos): Todo[] {
    
    switch (filtro) {
      case "Completo":
        return todo.filter(todo => todo.completado);

      case "Pendiente":
        return todo.filter(todo => !todo.completado);
    
      default:
        return todo;
    }
  }

}
