import React from "react"
import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../Common/Constants";
import service from "../services/LessonService";
import {connect} from "react-redux";

const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findLessonsForModule: moduleId =>
        fetch(MODULES_LESSONS_API_URL(moduleId))
            .then(response => response.json())
            .then(lessons => dispatcher({
                type: 'FIND_LESSONS_FOR_MODULE',
                lessons: lessons
            })),
    updateLesson: async (lesson) => {
        const actualLesson = await updateLesson(lesson)
        dispatcher({
            type: 'UPDATE_LESSON',
            lesson: actualLesson,
            lessonId: actualLesson._id
        })
    },
    addLesson: (moduleId) =>
        fetch(MODULES_LESSONS_API_URL(moduleId), {
            method: 'POST',
            body: JSON.stringify({title: 'New Lesson'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualLesson =>
                dispatcher({
                    type: 'CREATE_LESSON',
                    lesson: actualLesson
                })),
    deleteLesson: (lessonId) =>
        fetch(`${LESSONS_API_URL}/${lessonId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(status =>
                dispatcher({
                    type: 'DELETE_LESSON',
                    lessonId: lessonId
                })),
    findAllLessons: () =>
        fetch(LESSONS_API_URL)
            .then(response => response.json())
            .then(lessons =>
                dispatcher({
                    type: 'FIND_ALL_LESSONS',
                    lessons: lessons
                })
            )
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(LessonTabsComponent)