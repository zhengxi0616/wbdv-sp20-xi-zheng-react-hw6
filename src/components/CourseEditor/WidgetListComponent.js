import React from "react";

const WidgetListComponent = () =>
    <div class="col-lg-14">
        <ul class="list-group">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>Heading Widget</h3>
                    </div>
                    <div class="col-sm-2">
                        <button type="button"><i class="fas fa-arrow-down"></i></button>
                        <button type="button"><i class="fas fa-arrow-up"></i></button>
                    </div>
                    <div class="col-sm-3">
                        <select class="form-control wbdv-field wbdv-role" id="roleFld">
                            <option value="heading">
                                Heading
                            </option>
                            <option value="text">
                                Text
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-1">
                        <button type="button" class="btn"><i class="fas fa-times"></i></button>
                    </div>
                </div>

                    <div class="col-lg-12">
                        <input class="form-control" type="text" placeholder="Heading 1"/>
                    </div>

                    <div class="col-lg-12">
                        <input class="form-control" type="text" placeholder="Heading text"/>
                    </div>
                    <div class="col-lg-12">
                        <input class="form-control" type="text" placeholder="Widget text"/>
                    </div>
            </li>
            <li class="list-group-item">
                <div class="row">
                    <div class="col-sm-4">
                        <h5>Preview</h5>
                    </div>
                </div>
                    <h1>Heading Text</h1>
            </li>
        </ul>
    </div>



export default WidgetListComponent