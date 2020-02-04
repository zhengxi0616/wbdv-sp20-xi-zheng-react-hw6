import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {updateCourse, findAllCourses, deleteCourse, createCourse} from "../service/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course Name',
        courses: [],
        EditedCourseTitle: 'New Course Name'
    }

    componentDidMount = async () => {
        const courses = await findAllCourses()
        this.setState({
            courses: courses
        })
    }

    toggle = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    deleteCourse = (course) =>
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            })

        updateCourse = (course) =>
            updateCourse(course._id,{title: this.state.newCourseTitle})
            .then(actualCourse => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function(crs) {
                                if(crs._id !== course._id){
                                    return crs;
                                    }else {
                                    return {title: actualCourse};
                                }
                            })
                    })
                })
            })

        addCourse = () =>
            createCourse({
                title: this.state.newCourseTitle
            }).then(actualCourse => this.setState(prevState => {
                    return({
                        courses: [
                            ...prevState.courses,
                            actualCourse
                        ]
                    })
                })
            )



    showEditor = () =>
            this.setState({
                showEditor: true
            })

    hideEditor = () =>
        this.setState({
            showEditor: false
        })

    updateForm = (newState) => {
        this.setState(newState)
    }

    render() {
        return(
            <div>
                <h3>Course Manager</h3>

                {
                    this.state.showEditor &&
                    <CourseEditorComponent
                        hideEditor={this.hideEditor}/>
                }

                {
                    !this.state.showEditor &&
                    <div>
                        {
                            this.state.layout === 'table' &&
                            <nav className="navbar navbar-light bg-light">
                                        <button onClick={this.toggle}><i className="fas fa-grip-horizontal"></i></button>
                                        <input
                                            onChange={(e) => this.updateForm({
                                                newCourseTitle: e.target.value
                                            })}
                                            value={this.state.newCourseTitle}/>
                                        <button onClick={this.addCourse}>Add Course</button>
                                    </nav>
                        }
                        {
                            this.state.layout === 'table' &&
                                <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                updateCourse={this.updateCourse}
                                courses={this.state.courses}
                                //EditedCourseTitle={this.state.EditedCourseTitle}
                                />
                        }
                        {
                            this.state.layout === 'grid' &&
                            <nav className="navbar navbar-light bg-light">
                                <button onClick={this.toggle}><i className="fas fa-bars"></i></button>
                                <input
                                    onChange={(e) => this.updateForm({
                                        newCourseTitle: e.target.value
                                    })}
                                    value={this.state.newCourseTitle}/>
                                <button onClick={this.addCourse}>Add Course</button>
                            </nav>
                        }
                        {
                            this.state.layout === 'grid'&&
                                <CourseGridComponent
                                    showEditor={this.showEditor}
                                    deleteCourse={this.deleteCourse}
                                    updateCourse={this.updateCourse}
                                    courses={this.state.courses}
                                    //EditedCourseTitle={this.state.EditedCourseTitle}
                                />
                        }

                    </div>
                }

            </div>
        )
    }
}

export default CourseManagerContainer
