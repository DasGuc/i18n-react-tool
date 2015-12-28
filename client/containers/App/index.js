import React, { PropTypes } from 'react';
import Navbar from 'component/Navbar';
import Sidebar from 'component/Sidebar';

import '../../styles/main.scss';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Sidebar/>
        <div className="container">
          <Navbar/>
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
