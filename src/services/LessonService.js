import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../Common/Constants";

export const findLessonsForModule = (moduleId) =>
    fetch(MODULES_LESSONS_API_URL(moduleId))
        .then(response => response.json())

export const createLesson = (moduleId, lesson) =>
    fetch(MODULES_LESSONS_API_URL(moduleId), {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateLesson = async (lessonId, lesson) =>
    fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export default {
    findLessonsForModule, createLesson, deleteLesson, updateLesson
}