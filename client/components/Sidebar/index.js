import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import SidebarItem from './item';
import './style/index.scss';

class Sidebar extends React.Component {
  render() {
    const config = [
      {
        label: 'fr_FR',
        error: false,
        description: 'french'
      },
      {
        label: 'en_US'
      }
    ];

    return (
      <div className="sidebar">
        <div className="brand">
          <Glyphicon glyph="globe"/>
        </div>
        <div className="lang">
          {config.map((v, k) => {
            return <SidebarItem item={v} key={k}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
export { Sidebar };
