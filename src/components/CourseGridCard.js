import React from 'react'

export default class CourseCard extends React.Component {
    state = {
        editing: false,
        EditedCourseTitle: 'New Course Name',
        courses: this.courses
    }

    updateEditing = (newState) => {
        this.setState(newState)
    }
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="card w-12">
                <img className="card-img-top"
                     src="https://picsum.photos/250/400"/>
                <div className="card-body">
                    {
                        !this.state.editing &&
                        <a onClick={this.props.showEditor} href="#">
                            {this.props.course.title}
                        </a>
                    }

                    {this.state.editing &&
                    <input
                        onChange={(e) => this.updateEditing({
                            EditedCourseTitle: e.target.value
                        })}
                        value={this.state.EditedCourseTitle}/>
                    }
                    <p className="card-text">Card text.</p>
                    <div>
                        {!this.state.editing &&
                        <button onClick={() => this.props.deleteCourse(this.props.course)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        }

                        {!this.state.editing &&
                        <button onClick={() => {this.setState({editing: true})}}>
                            <i className="fas fa-edit"></i>
                        </button>
                        }
                        {this.state.editing &&
                        <button onClick={() => {
                            this.setState({editing: false} );this.props.updateCourse(this.props.course);}}>
                            <i className="fas fa-save">Save</i>
                        </button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}