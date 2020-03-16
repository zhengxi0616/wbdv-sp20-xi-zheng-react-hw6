import {WIDGETS_API_URL} from "../Common/Constants";

export const findWidgetsForTopic = (tid) =>
    fetch(`https://wbdv-mysql-xi-zheng-hw6.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const createWidget = (tid, newWidget) =>
    fetch(`https://wbdv-mysql-xi-zheng-hw6.herokuapp.com/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(newWidget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllWidgets = () =>
    fetch(`https://wbdv-mysql-xi-zheng-hw6.herokuapp.com/api/widgets`)
        .then(response => response.json())

export const deleteWidget = (widgetId) =>
    fetch(`https://wbdv-mysql-xi-zheng-hw6.herokuapp.com/api/widgets/${widgetId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateWidget = async (widgetId, updateWidget) => {
    const response = await fetch(`https://wbdv-mysql-xi-zheng-hw6.herokuapp.com/api/widgets/${widgetId}`, {
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