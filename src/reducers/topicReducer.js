const topicReducer = (state = {topics: []}, action) => {
    switch (action.type) {
        case 'CREATE_TOPIC':
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
            break;
        case 'DELETE_TOPIC':
            return {
                topics: state.topics.filter(
                    topic => topic.id !== action.topicId)
            }
            break;
        case 'UPDATE_TOPIC':
            return {
                topics: state.topics.map(topic =>
                    topic.id === action.topicId ? action.topic : topic
                )
            }
            break;
        case 'FIND_TOPICS_FOR_LESSON':
            return {
                topics: action.topics
            }
        default:
            return state
    }
}

export default topicReducer