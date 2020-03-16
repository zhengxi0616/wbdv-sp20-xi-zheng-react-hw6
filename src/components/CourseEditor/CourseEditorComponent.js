import React from "react";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from '../../reducers/moduleReducer';
import lessonReducer from '../../reducers/lessonReducer';
import topicReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/widgetReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";
import LessonTabsContainer from "../../containers/LessonTabsContainer"
import TopicPillsContainer from "../../containers/TopicPillsContainer";
import WidgetContainer from "../../containers/WidgetContainer";

import {findCourseById} from "../../services/CourseService";

const reducers = combineReducers({
    moduleReducer,lessonReducer,topicReducer,widgetReducer
})

const store = createStore(reducers)

export default class CourseEditorComponent extends React.Component {
    //{hideEditor, match, course, lessonId, courseId, moduleId, topicId, history}) =>
    state={course:{title:""}}

    componentDidMount= async () =>{
        this.setState({
            course: await findCourseById(this.props.courseId)
        })
        // console.log(await findCourseById(this.props.courseId))

    }

    render(){
        return(
        <Provider store={store}>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline">
                        <button className={"form-control"} onClick={() => {
                            this.props.history.push("/")
                        }}>
                            X
                        </button>
                        <h5>Course Editor {this.state.course.title}</h5>
                    </form>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <ModuleListContainer
                            moduleId={this.props.moduleId}
                            history={this.props.history}
                            courseId={this.props.courseId}/>
                    </div>
                    <div className="col-9">
                        {this.props.match.params.moduleId &&
                        <LessonTabsContainer
                            lessonId={this.props.lessonId}
                            moduleId={this.props.moduleId}
                            history={this.props.history}
                            courseId={this.props.courseId}/>}
                        {this.props.match.params.lessonId &&
                        <TopicPillsContainer
                            topicId={this.props.topicId}
                            lessonId={this.props.lessonId}
                            moduleId={this.props.moduleId}
                            history={this.props.history}
                            courseId={this.props.courseId}/>}
                        {this.props.match.params.topicId &&
                        <WidgetContainer
                            topicId={this.props.topicId}
                            history={this.props.history}/>}

                    </div>
                </div>
            </div>
        </Provider>
    )
}
}

