import React from "react";
import {connect} from "react-redux";
import service, {updateWidget} from "../services/WidgetService";
import WidgetListComponent from "../components/CourseEditor/WidgetListComponent";
import widgetReducer from "../reducers/widgetReducer";


const stateToPropertyMapper = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dispatchToPropertyMapper = (dispatch) => ({
    createWidget: (topicId, newWidget) =>
        service.createWidget(topicId, newWidget)
            .then(actualWidget =>
                dispatch({
                    type: "CREATE_WIDGET",
                    widget: actualWidget
                })),

    findWidgetsForTopic: (topicId) =>
        service.findWidgetsForTopic(topicId)
            .then(widgets =>
                dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: widgets
                })),

    deleteWidget: (widgetId) =>
        service.deleteWidget(widgetId)
            .then(status =>
                dispatch({
                    type: "DELETE_WIDGET",
                    widgetId: widgetId
                })),

    updateWidget: (widgetId, updateWidget) =>
        dispatch({
            type: "UPDATE_WIDGET",
            widget: updateWidget,
            widgetId: widgetId
        })
})

const WidgetContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent)

export default WidgetContainer