import React from 'react'
import CourseGridCardComponent from './CourseGridCardComponent'


const CourseGridComponent = ({courses, showEditor, updateCourse, deleteCourse, updateForm}) =>
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
                            updateForm={updateForm}
                        />
                    )
                })
            }
        </div>
    </div>

export default CourseGridComponent