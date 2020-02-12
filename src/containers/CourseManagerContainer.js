import React from "react";

import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {updateCourse, findAllCourses, deleteCourse, createCourse} from "../services/CourseService";
import CourseTableComponent from "../components/CourseList/CourseTableComponent";
import CourseGridComponent from "../components/CourseList/CourseGridComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course Name',
        courses: [],
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
        });

    deleteCourse = (course) =>
        deleteCourse(course._id).then(findAllCourses).then(courses => this.setState({courses:courses}));

    updateCourse = (course, title) =>
        updateCourse(course._id,{title: title}).then(findAllCourses).then(courses => this.setState({courses: courses}));

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
        );



    showEditor = () =>
            this.setState({
                showEditor: true
            });

    hideEditor = () =>
        this.setState({
            showEditor: false
        });

    updateFormState = (event) => {
        console.log(event.target.value)
        this.setState({
            newCourseTitle: event.target.value
        })
    }


    render() {
        return(
            <div>
                <h3>Course Manager</h3>
            <Router>
                <Route
                    path="/"
                    exact={true}
                    render={() =>
                        <CourseTableComponent
                            updateFormState={this.updateFormState}
                            newCourseTitle={this.state.newCourseTitle}
                            addCourse={this.addCourse}
                            toggle={this.toggle}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            layout={this.state.layout}
                            showEditor={this.showEditor}
                            updateCourse={this.updateCourse}/>
                    }/>
                <Route
                    path="/grid"
                    exact={true}
                    render={() =>
                        <CourseGridComponent
                            updateFormState={this.updateFormState}
                            newCourseTitle={this.state.newCourseTitle}
                            addCourse={this.addCourse}
                            toggle={this.toggle}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            layout={this.state.layout}
                            showEditor={this.showEditor}
                            updateCourse={this.updateCourse}/>
                    }/>

                <Route
                    path="/table"
                    exact={true}
                    render={() =>
                        <CourseTableComponent
                            updateFormState={this.updateFormState}
                            newCourseTitle={this.state.newCourseTitle}
                            addCourse={this.addCourse}
                            toggle={this.toggle}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            layout={this.state.layout}
                            showEditor={this.showEditor}
                            updateCourse={this.updateCourse}/>
                    }/>

                <Route
                    path="/course/:courseId"
                    exact={true}
                    render={(props) =>
                        <CourseEditorComponent
                            {...props}
                            courseId={props.match.params.courseId}
                            hideEditor={this.hideEditor}/>
                    }/>
                <Route
                    path="/course/:courseId/module/:moduleId"
                    exact={true}
                    render={(props) =>
                        <CourseEditorComponent
                            {...props}
                            moduleId={props.match.params.moduleId}
                            courseId={props.match.params.courseId}
                            hideEditor={this.hideEditor}/>
                    }/>
                <Route
                    path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                    exact={true}
                    render={(props) =>
                        <CourseEditorComponent
                            {...props}
                            lessonId={props.match.params.lessonId}
                            moduleId={props.match.params.moduleId}
                            courseId={props.match.params.courseId}
                            hideEditor={this.hideEditor}/>
                    }/>
                <Route
                    path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                    exact={true}
                    render={(props) =>
                        <CourseEditorComponent
                            {...props}
                            lessonId={props.match.params.lessonId}
                            moduleId={props.match.params.moduleId}
                            courseId={props.match.params.courseId}
                            topicId={props.match.params.topicId}
                            hideEditor={this.hideEditor}/>
                    }/>


            </Router>

            </div>
        );
    }
}

export default CourseManagerContainer
