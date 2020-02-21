const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            break;
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId)
            }
            break;
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widgetId ? action.widget : widget
                )
            }
            break;
        case 'FIND_WIDGETS_FOR_TOPIC':
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer