import React from 'react'
import CourseGridCardComponent from './CourseGridCard'
import CourseRow from "./CourseRow";

const CourseGridComponent = ({courses, showEditor, updateCourse, deleteCourse}) =>
    <div>
        <h5>Total Managed Course: {courses.length}</h5>
        <div className="row">
            {
                courses.map(function(course, index) {
                    return (
                        <CourseGridCardComponent
                            key={course._id}
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                        />
                    )
                })
            }
        </div>
    </div>

export default CourseGridComponent