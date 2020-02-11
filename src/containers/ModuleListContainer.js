import React from "react";
import {connect} from "react-redux";
import service from "../services/ModuleService";
//import {findModulesForCourse, createModule} from "../actions/moduleActions";
import ModuleListComponent from "../components/CourseEditor/ModuleListComponent";

import {MODULES_API_URL} from "../Common/Constants"

const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules
})

const dispatchToPropertyMapper = (dispatch) => ({
    createModule: (courseId, module) =>
        service.createModule(courseId, module)
            .then(actualModule =>
                dispatch({
                    type: "CREATE_MODULE",
                    module: actualModule
                })),
    findModulesForCourse: (courseId) =>
        service.findModulesForCourse(courseId)
            .then(modules =>
                dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: modules
                })),
    findAllModules: () =>
        service.findAllModules()
            .then(actualModules =>
                dispatch({
                    type: "FIND_ALL_MODULES",
                    modules: actualModules
                })),

    deleteModule: (moduleId) =>
        service.deleteModule(moduleId)
            .then(status =>
                dispatch({
                    type: "DELETE_MODULE",
                    moduleId: moduleId
                })),

    updateModule: (moduleId, module) =>
        service.updateModule(moduleId,module)
            .then(status =>
                dispatch({
                    type: "UPDATE_MODULE",
                    module: module,
                    moduleId: moduleId
                }))
})

const ModuleListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListComponent)

export default ModuleListContainer