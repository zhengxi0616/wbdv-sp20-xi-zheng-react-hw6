import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../Common/Constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateTopic = async (topicId, topic) =>
    fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findAllTopics = () =>
    fetch(`http://localhost:8080/api/topics`)
        .then(response => response.json())

export default {
    findTopicsForLesson, createTopic, deleteTopic, updateTopic,findAllTopics
}