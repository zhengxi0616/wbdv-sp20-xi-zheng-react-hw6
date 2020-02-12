import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from '../../reducers/moduleReducer';
import lessonReducer from '../../reducers/lessonReducer';
import topicReducer from "../../reducers/topicReducer";
import ModuleListContainer from "../../containers/ModuleListContainer";
import LessonTabsContainer from "../../containers/LessonTabsContainer"
import TopicPillsContainer from "../../containers/TopicPillsContainer";
import CourseRowComponent from "../CourseList/CourseRowComponent";


const reducers = combineReducers({
    moduleReducer,lessonReducer,topicReducer
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, lessonId, courseId, moduleId, topicId, history}) =>

    <Provider store={store}>
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <button className={"form-control"} onClick={() => {
                        history.push("/")
                    }}>
                        X
                    </button>
                    <Link className={"form-control"} to="/">
                        Back
                    </Link>
                    <h5 >Course Editor {courseId}</h5>
                </form>
            </nav>
            <div className="row">
                <div className="col-3">
                    <ModuleListContainer
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}/>
                </div>
                <div className="col-9">
                    <LessonTabsContainer
                        lessonId={lessonId}
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}/>
                    <TopicPillsContainer
                        topicId={topicId}
                        lessonId={lessonId}
                        moduleId={moduleId}
                        history={history}
                        courseId={courseId}/>
                    {/*<TopicPills/>*/}
                    {/*<WidgetList/>*/}
                </div>
            </div>
        </div>
    </Provider>
export default CourseEditorComponent
