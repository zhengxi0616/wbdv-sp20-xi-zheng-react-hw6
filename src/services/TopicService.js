import {TOPICS_API_URL, LESSONS_TOPICS_API_URL} from "../Common/Constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId))
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId), {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    }).then(response => response.json())

export const updateTopic = async (topicId, topic) =>
    fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export default {
    findTopicsForLesson, createTopic, deleteTopic, updateTopic
}