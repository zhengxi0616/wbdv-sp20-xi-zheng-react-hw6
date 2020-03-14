import React from 'react';
import {updateWidget} from "../../services/WidgetService";

export default class HeadingWidgetComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                        <div className="col-lg-3">
                            <div>&nbsp;</div>
                            <select onChange={event => this.props.updateWidget(this.props.widget.id,
                                {...this.props.widget,
                                    type:event.target.value
                                })} value={this.props.widget.type}>
                                <option value="Heading">
                                    Heading
                                </option>
                                <option value="Paragraph">
                                    Paragraph
                                </option>
                                <option value="List">
                                    List
                                </option>
                                <option value="Image">
                                    Image
                                </option>
                            </select>
                            <div>&nbsp;</div>
                        </div>

                        <div className="col-lg-12">
                            <input className="form-control" type="text"
                            onChange={event => this.props.updateWidget(this.props.widget.id,
                                {...this.props.widget,
                                    name:event.target.value
                                    })} value={this.props.widget.name}/>
                        </div>
                        <div>&nbsp;</div>
                        <div className={"col-lg-12"}>
                            <select className={"form-control form-control-lg"}
                                    onChange={event => this.props.updateWidget(this.props.widget.id,
                                        {...this.props.widget,
                                            size:event.target.value
                                        })} value={this.props.widget.size}>
                                <option value={1}>
                                    Heading Size 1
                                </option>
                                <option value={2}>
                                    Heading Size 2
                                </option>
                                <option value={3}>
                                    Heading Size 3
                                </option>
                                <option value={4}>
                                    Heading Size 4
                                </option>
                                <option value={5}>
                                    Heading Size 5
                                </option>
                                <option value={6}>
                                    Heading Size 6
                                </option>
                            </select>
                        </div>
                        <div>&nbsp;</div>
                        <div className="col-lg-12">
                            <input className="form-control" type="text" value={this.props.widget.value}
                                   onChange={event => this.props.updateWidget(this.props.widget.id,
                                       {...this.props.widget,
                                           value:event.target.value
                                       })}/>
                        </div>

            </div>
        )
    }

}