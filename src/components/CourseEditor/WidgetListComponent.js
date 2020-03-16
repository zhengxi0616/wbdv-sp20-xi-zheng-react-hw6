import React from "react";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import {updateWidget} from "../../services/WidgetService";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";


export default class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.topicId !== prevProps.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        preview: true,
        widget: {
            value: '',
            name: '',
            type: 'Heading',
            size: '',
            order: 'Unordered'
        }
    }

    render() {
        return (
            <span>

            <ul className="list-group">
                <li className={"list-group-item float-left"}>
                    <button className={"btn-sm col-1"} onClick={
                        () => this.props.createWidget(this.props.topicId, {
                            value: "New Widget Content",
                            name: "Widget Name",
                            type: "Heading",
                            size: 2,
                            style:"Unordered"
                        })
                    }>
                        <i className="fas fa-lg fa-plus"></i>
                    </button>

                    <button className={"btn-sm col-1"}
                            onClick={
                                ()=>this.props.widgets.map(widget => updateWidget(widget.id, widget))}
                    >
                                            <i className="fas fa-lg fa-save"></i>
                    </button>

                    <span className={"col-3"}>Preview</span>
                    {this.state.preview === true &&
                    <button className={"btn-sm col-1"} onClick={() => this.setState({
                        preview: false
                    })}><i className="fa fa-lg fa-toggle-on"></i></button>
                    }
                    {this.state.preview === false &&
                    <button className={"btn-sm col-1"} onClick={() => this.setState({
                        preview: true
                    })}><i className="fa fa-lg fa-toggle-off"></i></button>
                    }
                </li>

                {this.state.preview === true &&
                <span>
                        {this.props.widgets.map(widget =>
                            <li className={"list-group-item"}>
                                {widget.type === "Heading" &&
                                <span>
                                    {
                                        widget.size == 1 &&
                                        <h1>{widget.value}</h1>
                                    }
                                    {widget.size == 2 &&
                                    <h2>{widget.value}</h2>
                                    }
                                    {widget.size == 3 &&
                                    <h3>{widget.value}</h3>
                                    }
                                    {widget.size == 4 &&
                                    <h4>{widget.value}</h4>
                                    }
                                    {widget.size == 5 &&
                                    <h5>{widget.value}</h5>
                                    }
                                    {widget.size == 6 &&
                                    <h6>{widget.value}</h6>
                                    }
                                </span>
                                }
                                {widget.type === "Paragraph" &&
                                <span>
                                    <p>{widget.value}</p>
                                </span>
                                }

                                {widget.type === "List" &&
                                <span>
                                    {widget.style === "Ordered" &&
                                    <ol>
                                        {widget.value.split("\n").map((item) =>
                                            <li>{item}</li>)}
                                    </ol>
                                    }
                                    {widget.style === "Unordered" &&
                                    <ul>
                                        {widget.value.split("\n").map((item) =>
                                            <li>{item}</li>)}
                                    </ul>
                                    }
                                </span>
                                }

                            </li>
                        )
                        }
                </span>
                }


                {this.state.preview === false &&
                <span>
                        {this.props.widgets.map(widget =>
                            <li className={"list-group-item"}>
                                <div className={"row"}>
                                    <h4 className={"col-7"}>{widget.name}</h4>
                                    <div className={"col-2"}>
                                        <button type="button"><i className="fas fa-arrow-down"></i></button>
                                        <button type="button"><i className="fas fa-arrow-up"></i></button>
                                    </div>

                                    <div className={"col-2"}>

                                        <button className={"btn-sm"} onClick={() => this.props.deleteWidget(widget.id)}><i
                                            className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                                {widget.type === "Heading" &&
                                <HeadingWidgetComponent
                                    widget={widget}
                                    updateWidget={this.props.updateWidget}/>
                                }
                                {widget.type === "Paragraph" &&
                                <ParagraphWidgetComponent
                                    widget={widget}
                                    updateWidget={this.props.updateWidget}/>
                                }

                                {widget.type === "List" &&
                                <ListWidgetComponent
                                    widget={widget}
                                    updateWidget={this.props.updateWidget}/>
                                }


                            </li>)
                        }
                    </span>
                }
            </ul>
            </span>

        )

    }
}

