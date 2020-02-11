import React from "react";
import ModuleList from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from '../../reducers/moduleReducer';
import lessonReducer from '../../reducers/lessonReducer';
import ModuleListContainer from "../../containers/ModuleListContainer";


const reducers = combineReducers({
    moduleReducer,lessonReducer
})

const store = createStore(reducers)

const CourseEditorComponent = ({hideEditor, match, courseId, moduleId, history}) =>
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
                    <LessonTabsComponent
                        moduleId={moduleId}/>
                    {/*<TopicPills/>*/}
                    {/*<WidgetList/>*/}
                </div>
            </div>
        </div>
    </Provider>
export default CourseEditorComponent
