import React from 'react'
import CourseGridCardComponent from './CourseGridCardComponent'
import {Link} from "react-router-dom";


const CourseGridComponent =
    ({
         updateFormState,
         newCourseTitle,
         addCourse,
         toggle,
         deleteCourse,
         courses,
         layout,
         showEditor,
         updateCourse,
     }) =>
    <div>
        <nav className="navbar navbar-light bg-light">
            <Link to={`/table`}>
                <button className="buttonFalse" onClick={toggle}><i className="fas fa-bars"></i></button>
            </Link>
            <input
                onChange={updateFormState}
                value={newCourseTitle}
                placeholder="New Course Title"/>
            <button onClick={addCourse}>Add Course</button>
        </nav>
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