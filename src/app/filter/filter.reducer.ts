import * as fromFiltro from "./filter.actions";

const estadoInicial: fromFiltro.filtrosValidos = "Todo";

export const filtroReducer = (state = estadoInicial, action:fromFiltro.Acciones):fromFiltro.filtrosValidos => {

    switch (action.type) {
        
        case fromFiltro.FILTRAR_TODO:
            return action.filtro;
    
        default:
            return state;
    }

}

