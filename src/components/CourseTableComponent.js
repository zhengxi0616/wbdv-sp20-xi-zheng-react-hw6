import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({courses, deleteCourse, showEditor, updateCourse, updateForm}) =>

    <div className="container body">
        <h5>Total Managed Course: {courses.length}</h5>
        <div className="table-responsive-sm">

            <table className="table">
                <thead>
                <tr>
                    <th className="tablewidth wbdv-header wbdv-title">Title</th>
                    <th className="wbdv-header wbdv-owner">Owned by me</th>
                    <th className="wbdv-header wbdv-last-modified">Last modified by me</th>
                    <th>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Sort by&nbsp;
                        <button type="button">
                            <i className="fas fa-sort-alpha-down"></i>
                        </button>
                    </th>
                    <th>Modify</th>
                </tr>
                </thead>
                <tbody>
                {
                    courses.map(function(course, index){
                        return (
                            <CourseRowComponent
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                updateForm={updateForm}
                                />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>

export default CourseTableComponent