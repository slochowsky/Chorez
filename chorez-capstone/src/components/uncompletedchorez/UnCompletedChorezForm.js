import React, { Component } from 'react';
import UnCompletedChorezManager from '../../modules/UnCompletedChorezManager';
// import './UnCompletedChorezForm.css'

class UnCompletedChorezForm extends Component {
    state = {
        Type: "",
        Name: "",
        Description: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewUnCompletedChorez = evt => {
        evt.preventDefault();
        if (this.state.Type === "" || this.state.Name ==="" || this.state.Description ==="") {
            window.alert("Please input an chore type, name and description");
        } else {
            this.setState({ loadingStatus: true });
            const uncompletedchorez = {
                type: this.state.Type,
                name: this.state.Name,
                description: this.state.Description,
            };

            UnCompletedChorezManager.post(uncompletedchorez)
            .then(() => this.props.history.push("/uncompletedchorez"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="Type"
                        placeholder="UnCompletedChore type"
                        />
                        <label htmlFor="Type">Type</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="Description"
                        placeholder="Description"
                        />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewUnCompletedChorez}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default UnCompletedChorezForm