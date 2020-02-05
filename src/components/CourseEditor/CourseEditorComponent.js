import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

const CourseEditorComponent = ({hideEditor}) =>
    <div>

        <nav className="navbar navbar-light bg-light">
            <div className="col-6 row">
                <button onClick={hideEditor}>close</button>
                <h3>Course Editor</h3>
            </div>
            <div className="col-5">
                <LessonTabsComponent/>
            </div>
        </nav>
        <div className="row">
            <div className="col-3">
                <ModuleListComponent/>
            </div>
            <div className="col-8">
                <div className="container">
                    <TopicPillsComponent/>
                    <div align="right">
                        <button type="button" className="btn-sm btn-success">Save</button>
                        <text>Preview</text>
                        <button type="button" className="btn"><i className="far fa-eye-slash"></i></button>
                    </div>
                    <WidgetListComponent/>
                </div>
            </div>
        </div>
    </div>
export default CourseEditorComponent