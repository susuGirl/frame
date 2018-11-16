import React, { Component } from 'react';

class Second extends Component {
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
      pathname: '/third',
      state: {
        text: 'from second'
      }
    });
  }
  render() {
    return (
      <div onClick={this.changeRouter}>
        Second
      </div>
    );
  }
}

export default Second;
