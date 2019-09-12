import React, { Component } from 'react';

class UnCompletedChorezCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Type: {this.props.uncompletedchorez.type}</h3>
          <p>Name: {this.props.uncompletedchorez.name}</p>
          <p>Description: {this.props.uncompletedchorez.description}</p>
          <button type="button" onClick={() => this.props.deleteUnCompletedChorez(this.props.uncompletedchorez.id)}>Delete</button>
          <button type="button"
          onClick={() => {this.props.history.push(`/uncompletedchorez/${this.props.uncompletedchorez.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default UnCompletedChorezCard