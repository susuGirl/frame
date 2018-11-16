import React, { Component } from 'react';

class Third extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    console.log('state--------', this.props.location.state)
  }
  componentDidMount() {

  }
  changeRouter = () => {
    this.props.history.push({
      pathname: '/first',
      state: {
        text: 'from third'
      }
    });
  }
  render() {
    return (
      <div onClick={this.changeRouter}>
        Third
      </div>
    );
  }
}

export default Third;
