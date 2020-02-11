import {MODULES_API_URL, COURSES_MODULES_API_URL} from "../Common/Constants";

export const findModulesForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001493040/courses/${courseId}/modules`)
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllModules = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001493040/modules")
    .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateModule = async (moduleId, module) =>
    fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export default {
    findModulesForCourse, createModule, deleteModule, updateModule,findAllModules
}