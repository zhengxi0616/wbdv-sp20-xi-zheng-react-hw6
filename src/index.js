import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './Container/CourseManager';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

