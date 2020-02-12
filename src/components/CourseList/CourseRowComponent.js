import React from "react";
import {Link} from "react-router-dom";

class CourseRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    state = {
        editing: false,
        EditedCourseTitle: "",
        highlighting: false
    }

    handleClick=()=>{
        this.setState({
            highlighting:!this.state.highlighting
        })
    }


    render() {
        return(
            <tr className={this.state.highlighting ? "highlightTrue": "highlightFalse"} onClick={this.handleClick}>
                <td className="wbdv-row wbdv-title"  >
                    {
                        !this.state.editing &&
                        <a onClick={this.props.showEditor} href={`/course/${this.props.course._id}`}>
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

                </td>
                <td className="wbdv-row wbdv-owner" >
                    me
                </td>
                <td className="wbdv-row wbdv-modified-date"  >
                    6:45 PM
                </td>
                <td className="wbdv-row wbdv-modified-date" >
                   &nbsp;
                </td>



                <td>
                    {!this.state.editing &&
                    <button onClick={() => this.props.deleteCourse(this.props.course)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    }

                    {!this.state.editing &&
                    <button onClick={() => {
                        this.setState({editing: true})
                    }}>
                        <i className="fas fa-edit"></i>
                    </button>
                    }
                    {this.state.editing &&
                    <button onClick={() =>
                        this.props.updateCourse(this.props.course, this.state.EditedCourseTitle).then(() => this.setState({editing: false}))
                    }>
                        <i className="fas fa-save">Save</i>
                    </button>
                    }

                </td>
            </tr>


        )

    }
}

export default CourseRowComponent