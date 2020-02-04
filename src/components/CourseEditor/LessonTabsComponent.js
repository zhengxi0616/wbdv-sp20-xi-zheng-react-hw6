import React from "react";

const LessonTabsComponent = ({lessons}) =>
    <ul className="list-inline">
        <li className="list-inline-item">
            <a href="#">Build</a>
        </li>
        <li className="list-inline-item">
            <a href="#">Apps</a>
        </li>
        <li className="list-inline-item">
            <a href="#">Theme</a>
        </li>
        <li className="list-inline-item">
            <a href="#">Store</a>
        </li>
        <li className="list-inline-item">
            <a href="#">Settings</a>
        </li>
        <li className="list-inline-item">
            <button type="button" className="btn btn-sm wbdv-topic-add-btn">
                <i className="fas fa-plus"></i>
            </button>
        </li>
    </ul>

export default LessonTabsComponent