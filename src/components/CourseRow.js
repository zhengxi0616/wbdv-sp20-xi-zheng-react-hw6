import React from "react";

class CourseRow extends React.Component {
    state = {
        editing: false,
    }

    updateEditing = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <tr>
                <td className="wbdv-row wbdv-title">
                    {
                        !this.state.editing &&
                        <a onClick={this.props.showEditor} href="#">
                            {this.props.course.title}
                        </a>
                    }

                    {this.state.editing &&
                    <input
                        onChange={(e) => this.updateEditing({
                            newCourseTitle: e.target.value
                        })}
                        value={this.state.newCourseTitle}/>

                    }

                </td>
                <td className="wbdv-row wbdv-owner">
                    me
                </td>
                <td className="wbdv-row wbdv-modified-date">
                    6:45 PM
                </td>
                <td align="right">
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

                </td>
            </tr>
        )
    }
}

export default CourseRow