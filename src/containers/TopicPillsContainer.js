import React from "react";
import {connect} from "react-redux";
import service from "../services/TopicService";
import TopicPillsComponent from "../components/CourseEditor/TopicPillsComponent";


const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId, topic) =>
        service.createTopic(lessonId, topic)
            .then(actualTopic =>
                dispatch({
                    type: "CREATE_TOPIC",
                    lesson: actualTopic
                })),
    findTopicsForLesson: (lessonId) =>
        service.findTopicsForLesson(lessonId)
            .then(topics =>
                dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics: topics
                })),

    deleteTopic: (topicId) =>
        service.deleteTopic(topicId)
            .then(status =>
                dispatch({
                    type: "DELETE_TOPIC",
                    topicId: topicId
                })),

    updateTopic: (topicId, topic) =>
        service.updateTopic(topicId,topic)
            .then(status =>
                dispatch({
                    type: "UPDATE_TOPIC",
                    topic: topic,
                    topicId: topicId
                }))
})

const TopicPillsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsComponent)

export default TopicPillsContainer