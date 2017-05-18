import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel, Nav, NavItem } from 'react-bootstrap'

class Results extends Component {
  render() {
    return(
     <div>
      <h3>{this.props.end_message}</h3>
      <p>Your score was: {this.props.score}</p>
      <Button bsStyle="success" onClick={this.props.handleRestart}> Retry </Button>
     </div>

    //  {alert('Have fun!')}
    //   <Nav bsStyle="pills" activeKey={1} onSelect={this.props.handleSubmit}>
    //   <NavItem eventKey={1} href="/home">Submit</NavItem>
    //   </Nav>
   )
  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.string,
  restart: PropTypes.func.isRequired
}

Results.defaultProps = {
    end_message: 'Congratulations!'
}

export default Results;
