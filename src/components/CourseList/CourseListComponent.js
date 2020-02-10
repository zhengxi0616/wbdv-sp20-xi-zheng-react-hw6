import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent =
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

            {
                layout === 'grid' &&
                <nav className="navbar navbar-light bg-light">
                    <button className="buttonFalse" onClick={toggle}><i className="fas fa-bars"></i></button>
                    <input
                        onChange={updateFormState}
                        value={newCourseTitle}
                        placeholder="New Course Title"/>
                    <button onClick={addCourse}>Add Course</button>
                </nav>
            }
            {
                layout === "grid" &&
                <CourseGridComponent
                    showEditor={showEditor}
                    updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                    courses={courses}/>
            }
            {
                layout === 'table' &&
                <nav className="navbar navbar-light bg-light">
                    <button className="buttonFalse" onClick={toggle}><i className="fas fa-grip-horizontal"></i></button>
                    <input
                        onChange={updateFormState}
                        value={newCourseTitle}
                        placeholder="New Course Title"/>
                    <button onClick={addCourse}>Add Course</button>
                </nav>
            }

            {
                layout === "table"  &&
                <CourseTableComponent
                    showEditor={showEditor}
                    updateCourse={updateCourse}
                    deleteCourse={deleteCourse}
                    courses={courses}/>
            }
        </div>

export default CourseListComponent