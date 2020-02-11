import React from "react";
import {connect} from "react-redux";
import service from "../services/LessonService";
import LessonTabsComponent from "../components/CourseEditor/LessonTabsComponent";


const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dispatchToPropertyMapper = (dispatch) => ({
    createLesson: (moduleId, lesson) =>
        service.createLesson(moduleId, lesson)
            .then(actualLesson =>
                dispatch({
                    type: "CREATE_LESSON",
                    lesson: actualLesson
                })),
    findLessonsForModule: (moduleId) =>
        service.findLessonsForModule(moduleId)
            .then(lessons =>
                dispatch({
                    type: "FIND_LESSONS_FOR_MODULE",
                    modules: lessons
                })),

    deleteLesson: (lessonId) =>
        service.deleteLesson(lessonId)
            .then(status =>
                dispatch({
                    type: "DELETE_LESSON",
                    moduleId: lessonId
                })),

    updateLesson: (lessonId, lesson) =>
        service.updateLesson(moduleId,lesson)
            .then(status =>
                dispatch({
                    type: "UPDATE_LESSON",
                    module: lesson,
                    moduleId: lessonId
                }))
})

const LessonTabsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabsComponent)

export default LessonTabsContainer