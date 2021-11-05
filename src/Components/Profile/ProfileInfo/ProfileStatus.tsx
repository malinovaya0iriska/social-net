import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate( prevProps: ProfileStatusPropsType, prevState: { editMode: boolean, status: string },) {
        console.log('componentDidUpdate')
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    activateMode = () => {
        this.setState( {editMode: true})
    }
    deactivateMode = () => {
        this.setState( {editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState( {status: e.currentTarget.value})

    }

    render() {
        console.log("render")
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateMode}>
                        {this.props.status || 'This is my status'}
                    </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateMode}
                           value={this.state.status}
                           onChange={this.onStatusChange}
                           autoFocus={true}
                    />
                </div>
                }
            </div>
        )
    }
}