import React, { Component } from 'react';

class First extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {

  }
  componentDidMount() {

  }
  changeRouter = () => {
    this.props.history.push({
      pathname: '/second',
      state: {
        text: 'from first'
      }
    });
  }
  render() {
    return (
      <div onClick={this.changeRouter}>
        First
      </div>
    );
  }
}

export default First;
