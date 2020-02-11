import {COURSES_API_URL} from "../Common/Constants";

export const updateCourse = async (courseId, course) => {
    const response = await fetch(`${COURSES_API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteCourse = async (courseId) => {
    const response = await fetch(`${COURSES_API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const createCourse = async (course) =>
{
    const response = await fetch(COURSES_API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const findAllCourses = async () => {
    let response = await fetch(COURSES_API_URL)
    return await response.json()
}

export const findUserById = async (courseId) =>
{
    return fetch(`${COURSES_API_URL}/${courseId}`)
        .then(response => response.json())
}
