import React, { Component } from "react"
import UnCompletedChorezManager from "../../modules/UnCompletedChorezManager"


class UnCompletedChorezEditForm extends Component {
    //set the initial state
    state = {
      Type: "",
      Name: "",
      Description: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingUnCompletedChorez = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUnCompletedChorez = {
        id: this.props.match.params.uncompletedchorezId,
        type: this.state.Type,
        name: this.state.Name,
        description: this.state.Description
      };

      UnCompletedChorezManager.update(editedUnCompletedChorez)
      .then(() => this.props.history.push("/uncompletedchorez"))
    }

    componentDidMount() {
      UnCompletedChorezManager.get(this.props.match.params.uncompletedchorezId)
      .then(uncompletedchorez => {
          this.setState({
            Type: uncompletedchorez.type,
            Name: uncompletedchorez.name,
            Description: uncompletedchorez.description,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="Type">Type</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="Type"
                value={this.state.Type}
              />
                <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="Name"
                value={this.state.Name}
              />
                <label htmlFor="description">Description</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="Description"
                value={this.state.Description}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingUnCompletedChorez}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default UnCompletedChorezEditForm