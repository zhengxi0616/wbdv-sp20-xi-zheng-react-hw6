import React from "react";

const ModuleListComponent = ({modules}) =>
    <ul class="list-group">
        <li class="list-group-item">
            <div class="row">
                <div class="col-sm-10">
                    Module 1 - jQuery
                </div>
                <div classe="col-sm-0">
                    <button type="button" className="wbdv-module-item-delete-btn"><i
                        className="far fa-window-close"></i></button>
                </div>
            </div>
        </li>
        <li class="list-group-item wbdv-module-item">
            <div class="row">
                <div class="col-sm-10 wbdv-module-item-title">
                    Module 2 - React
                </div>
                <div class="col-sm-0">
                    <button type="button" class="wbdv-module-item-delete-btn"><i
                        class="far fa-window-close"></i></button>
                </div>
            </div>
        </li>
        <li class="list-group-item wbdv-module-item">
            <div class="row">
                <div class="col-sm-10 wbdv-module-item-title">
                    Module 3 - Redux
                </div>
                <div class="col-sm-0">
                    <button type="button" class="wbdv-module-item-delete-btn"><i
                        class="far fa-window-close"></i></button>
                </div>
            </div>
        </li>
        <li class="list-group-item">
            <div class="row">
                <div class="col-sm-9">
                    <input class=".w-2" type="text" placeholder="New Module"/>
                </div>
                <div class="col-sm-3" >
                    <button type="button" class="wbdv-module-item-add-btn"><i class="far fa-plus-square"></i>
                    </button>
                </div>
            </div>
        </li>
    </ul>


export default ModuleListComponent
