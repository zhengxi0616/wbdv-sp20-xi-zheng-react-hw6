import React from 'react'

export default class CourseCard extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        editing: false,
        EditedCourseTitle: ""
    }
    render() {
        return (
            <div className={"col-xl-2 col-lg-3 col-md-4 col-sm-6"}>
            <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/270/350"/>
                <div className="card-body">
                    {
                        !this.state.editing &&
                        <a onClick={this.props.showEditor} href={`/course-editor/${this.props.course._id}`}>
                            {this.props.course.title}
                        </a>
                    }

                    {this.state.editing &&
                    <input
                        onChange={(e) => this.setState({
                            EditedCourseTitle: e.target.value
                        })}
                        value={this.state.EditedCourseTitle}/>
                    }

                    <p className="card-text">preview text</p>
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
                        <button onClick={() =>
                            this.props.updateCourse(this.props.course, this.state.EditedCourseTitle).then(() => this.setState({editing:false}))
                        }>
                            <i className="fas fa-save">Save</i>
                        </button>
                        }
                    </div>
                </div>
            </div>
            </div>
        )
    }
}