import React from 'react';
import {updateWidget} from "../../../services/WidgetService";

export default class ImageWidgetComponent extends React.Component {
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