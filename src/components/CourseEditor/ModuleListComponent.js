import React from "react";

export default class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId)
    }

    state = {
        activeModuleId: this.props.moduleId,
        editingModuleId: '',
        EditedModuleTitle: 'New Module'
    }

    render() {
        return (
            <ul className="list-group">
                {
                    this.props.modules && this.props.modules.map(module =>
                        <li className={`list-group-item ${module._id === this.state.activeModuleId ? 'active':''}`} onClick={() => {
                            const moduleId = module._id
                            this.props.history.push(`/course/${this.props.courseId}/module/${moduleId}`)
                            this.setState({
                                activeModuleId: module._id
                            })}}
                            key={module._id}>
                            {module._id !== this.state.editingModuleId &&
                            <span>{module.title}
                            <div className={"float-right"}>
                                <button onClick={() =>this.props.deleteModule(module._id)}
                                    className="float-right">
                                    <i className="far fa-window-close"></i>
                                    </button>
                                <button onClick={() => {
                                    const moduleId = module._id
                                    this.props.history.push(`/course/${this.props.courseId}/module/${moduleId}`)
                                    this.setState({
                                        editingModuleId: module._id
                                    })
                                }}>
                                    <i className="fas fa-edit"></i>
                                    </button>
                                </div>
                            </span>
                            }
                            {module._id === this.state.editingModuleId &&
                            <span>

                                <input
                                    onChange={(e) => this.setState({
                                        EditedModuleTitle: e.target.value
                                    })}
                                    value={this.state.EditedModuleTitle}/>


                                <div className={"float-right"}>
                                    <button onClick={() => this.props.updateModule(module._id, {title: this.state.EditedModuleTitle})
                                        .then(() => this.setState({editingModuleId: ''}))}>
                                    <i className="fas fa-save"></i>
                                    </button>
                                </div>
                                </span>}


                                </li>)

                }
                <li className="list-group-item">
                    <input
                        onChange={(e) => this.setState({
                            EditedModuleTitle: e.target.value
                        })}
                        value={this.state.EditedModuleTitle}/>
                    <div className={"float-right"}>
                        <button onClick={
                            () => this.props.createModule(this.props.courseId, {title: this.state.EditedModuleTitle})
                        }>
                            +
                        </button>
                    </div>
                </li>
            </ul>
        );
    }
}
