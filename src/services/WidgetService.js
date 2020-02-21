import {WIDGETS_API_URL} from "../Common/Constants";

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGETS_API_URL}/topics/${tid}/widgets`)
        .then(response => response.json())

export const createWidget = (tid, newWidget) =>
    fetch(`${WIDGETS_API_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGETS_API_URL}/widgets`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_API_URL}/widgets/${widgetId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateWidget = async (widgetId, updateWidget) => {
    const response = await fetch(`${WIDGETS_API_URL}/widgets/${widgetId}`, {
        method: 'PUT',
        body: JSON.stringify(updateWidget),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}


export default {
    findWidgetsForTopic, createWidget, deleteWidget, updateWidget,findAllWidgets
}