import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({courses, deleteCourse, showEditor, updateCourse}) =>

    <div className="container body">
        <h5>Total Managed Course: {courses.length}</h5>
        <div className="table-responsive-sm">

            <table className="table">
                <thead>
                <tr>
                    <th className="tablewidth wbdv-header wbdv-title">Title</th>
                    <th className="wbdv-header wbdv-owner">Owned by me</th>
                    <th className="wbdv-header wbdv-last-modified">Last modified by me</th>
                    <th className="wbdv-header wbdv-sort">
                        <button type="button" className="wbdv-button wbdv-grid-layout">
                            <i className="fas fa-grip-horizontal"></i>
                        </button>
                        or
                        <button type="button" className="wbdv-button wbdv-list-layout">
                            <i className="fas fa-bars"></i>
                        </button>
                    </th>
                    <th>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Sort by&nbsp;
                        <button type="button">
                            <i className="fas fa-sort-alpha-down"></i>
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    courses.map(function(course, index){
                        return (
                            <CourseRow
                                course={course}
                                showEditor={showEditor}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                />
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </div>

export default CourseTableComponent