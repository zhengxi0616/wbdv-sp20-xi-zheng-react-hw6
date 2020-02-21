import React from 'react';

export default class ParagraphWidgetComponent extends React.Component {
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
                    </select>
                    <div>&nbsp;</div>
                </div>
                        <div className="col-lg-12">
                            <input className="form-control" type="text" placeholder="Heading 1"
                                   onChange={event => this.props.updateWidget(this.props.widget.id,
                                       {...this.props.widget,
                                           name:event.target.value
                                       })} />
                        </div>
                        <div>&nbsp;</div>
                        <div className="col-lg-12">
                            <input className="form-control" type="text" placeholder="Widget text"
                                   onChange={event => this.props.updateWidget(this.props.widget.id,
                                       {...this.props.widget,
                                           value:event.target.value
                                       })}/>
                        </div>
            </div>
        )
    }

}