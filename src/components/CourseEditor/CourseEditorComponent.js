import React from "react";

import LessonTabsComponent from "./LessonTabsComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import lessonReducer from '../../reducers/lessonReducer'


const reducers = combineReducers({
    lessonReducer
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
