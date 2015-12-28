import React, { PropTypes } from 'react';

class Lang extends React.Component {
  static propTypes = {
    routeParams: PropTypes.object
  }
  
  render() {
    const { routeParams } = this.props;
    return <div>{`coucou ${routeParams.langName}`}</div>;
  }
}

export default Lang;
