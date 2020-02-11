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


const reducers = combineReducers({
    moduleReducer,lessonReducer,topicReducer
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, lessonId, courseId, moduleId, topicId, history}) =>
    <Provider store={store}>
        <div>
            <button onClick={() => {
                history.push("/")
            }}>
                Close
            </button>
            <Link to="/">
                Back
            </Link>
            <h3>Course Editor {courseId}</h3>
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
