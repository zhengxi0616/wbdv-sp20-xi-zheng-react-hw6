import React from "react";

export default class LessonTabsComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.moduleId !== prevProps.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    state = {
        selectedLessonId: this.props.lessonId,
        editingLessonId: '',
        lesson: {
            title: '',
            _id: ''
        },
        EditLessonTitle: '',
        NewLessonTile:'New Module'
    }

    render() {
        return(
            <ul className="nav nav-tabs">
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                        <li className={`nav-item ${lesson._id === this.state.selectedLessonId ? 'active':''}`}
                        onClick={() => {
                            const lessonId = lesson._id
                            this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`)
                            this.setState({
                                selectedLessonId: lesson._id
                            })}}
                            key={module._id}>
                            <a className={`nav-link
                                            ${(this.state.editingLessonId === lesson._id || this.state.selectedLessonId === lesson._id)?'active':''}`}>
                                {this.state.editingLessonId !== lesson._id &&
                                <span>
                                    {lesson.title}
                                    <button onClick={() => {
                                        const lessonId = lesson._id
                                        this.props.history.push(`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lessonId}`)
                                        this.setState({
                                            editingLessonId: module._id
                                        })
                                    }}>
                                    <i className="fas fa-edit"></i>
                                    </button>
                                </span>}
                                {this.state.editingLessonId === lesson._id &&
                                <input
                                    onChange={(e) => {
                                        const newTitle = e.target.value
                                        this.setState(prevState => ({
                                            lesson: {
                                                ...prevState.lesson,
                                                title: newTitle
                                            }
                                        }))
                                    }}
                                    value={this.state.lesson.title}/>}
                                <button onClick={() =>
                                {
                                    this.props.updateLesson(this.state.lesson)
                                        .then(() =>
                                            this.setState({
                                                editingLessonId: ''
                                            })
                                        )
                                }
                                }>
                                    Save
                                </button>
                                <button onClick={
                                    () => this.props.deleteLesson(lesson._id)}>
                                    X
                                </button>
                                <button onClick={() => {
                                    this.setState({
                                        lesson: lesson,
                                        editingLessonId: lesson._id
                                    })
                                }}>
                                    Edit
                                </button>
                            </a>
                        </li>)
                }
                <li className="nav-item">
                    <button onClick={() => this.props.addLesson(this.props.moduleId)}>+</button>
                </li>
            </ul>
        )
    }
}

