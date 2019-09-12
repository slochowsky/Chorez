import React, { Component } from 'react'
//import the components we will need
import UnCompletedChorezCard from './UnCompletedChorezCard'
import UnCompletedChorezManager from '../../modules/UnCompletedChorezManager'

class UnCompletedChorezList extends Component {
    //define what this component needs to render
    state = {
        uncompletedchorez: [],
    }

    componentDidMount() {
        console.log("UNCOMPLETEDCHOREZ LIST: ComponentDidMount");
        UnCompletedChorezManager.getAll()
            .then((uncompletedchorez) => {
                this.setState({
                    uncompletedchorez: uncompletedchorez
                })
            })
    }
    deleteUnCompletedChorez = id => {
        UnCompletedChorezManager.delete(id)
        .then(() => {
          UnCompletedChorezManager.getAll()
          .then((newUnCompletedChorez) => {
            this.setState({
                uncompletedchorez: newUnCompletedChorez
            })
          })
        })
      }

      render(){
        console.log("UnCompletedChorezList: Render");
      
        return(
          <React.Fragment>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { this.props.history.push("/uncompletedchorez/new") }}>
                    Add Chore
                </button>
            </section>
          <div className="container-cards">
            {this.state.uncompletedchorez.map(uncompletedchorez =>
              <UnCompletedChorezCard 
              key={uncompletedchorez.id} 
              uncompletedchorez={uncompletedchorez}
              deleteUnCompletedChorez={this.deleteUnCompletedChorez}
              {...this.props}
              />
            )}
          </div>
        //   </React.Fragment>
        )
      }
}

export default UnCompletedChorezList;