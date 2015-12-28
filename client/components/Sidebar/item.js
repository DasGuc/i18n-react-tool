import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Tooltip from 'component/Tooltip';

class SidebarItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    key: PropTypes.number,
  }

  render() {
    const { item, key } = this.props;
    let cls = '';

    if (typeof item.error !== 'undefined' && item.error) {
      cls = 'error';
    }
    else {
      cls = 'success';
    }

    return (
      <Tooltip text={item.description}>
        <Link to={`/lang/${item.label}`}>
          <div className={`item item-${cls}`} key={key}>
            {item.label}
          </div>
        </Link>
      </Tooltip>
    );
  }
}

export default SidebarItem;
export { SidebarItem };
