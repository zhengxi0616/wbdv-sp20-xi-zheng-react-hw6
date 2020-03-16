import React from "react";

export default class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.findTopicsForLesson(this.props.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    state = {
        selectedTopicId: this.props.topicId,
        editingTopicId: '',
        topic: {
            title: '',
            id: ''
        }
    }

    render() {
        return (
            <ul class="nav nav-pills">
                {
                    this.props.topics && this.props.topics.map(topic =>
                        <li className={`"nav-item"  ${topic.id === this.state.selectedTopicId ? 'active':''}`}
                            onClick={() => {
                                const topicId = topic.id
                                this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`)
                                this.setState({
                                    selectedTopicId: topic.id
                                })}}
                            key={topic.id}>
                            <a className={`nav-link
                                            ${(this.state.editingTopicId === topic.id || this.state.selectedTopicId === topic.id)?'active':''}`}>
                                {this.state.editingTopicId !== topic.id &&

                            <span>
                                {topic.title}
                                <text>&nbsp;</text>
                                <text>&nbsp;</text>
                                <div className={"float-right"}>

                                <button className={"btn-sm"}
                                        onClick={() => {
                                    const topicId = topic.id
                                    this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`)
                                    this.setState({
                                        editingTopicId: topic.id
                                    })
                                }}>
                                    <i className="fas fa-edit"></i>
                                    </button>
                                </div>
                            </span>
                            }
                            {this.state.editingTopicId === topic.id&&
                            <span>

                                <input
                                    onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            topic: {
                                                ...prevState.topic,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                    value={this.state.topic.title}/>


                                <div className={"float-right"}>
                                    <button className={"btn-sm"}
                                            onClick={() => this.props.updateTopic(topic.id, {title: this.state.topic.title})
                                        .then(() => this.setState({editingTopicId: ''}))
                                        .then(() => this.props.findTopicsForLesson(this.props.lessonId))}>
                                        <i className="fas fa-save"></i>
                                    </button>
                                    <button className={"btn-sm"}
                                            onClick={() =>this.props.deleteTopic(topic.id)}>
                                        <i className="far fa-window-close"></i>
                                    </button>
                                </div>
                                </span>}
                            </a>

                        </li>)
                }
                <li className="nav-item col-1">
                    <button onClick={() => this.props.createTopic(this.props.lessonId, {title: "New Topic"})}>
                        <i className="fas fa-plus"></i>
                    </button>
                </li>
            </ul>
        )

    }
}