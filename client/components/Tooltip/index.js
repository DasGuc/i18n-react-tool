import React, { PropTypes } from 'react';
import { OverlayTrigger, Tooltip as BTooltip } from 'react-bootstrap';

class Tooltip extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    children: PropTypes.any.isRequired,
    placement: PropTypes.string
  }

  static defaultProps = {
    placement: 'right'
  }
    
  render() {
    const { text, children, placement } = this.props;
    const tooltip = <BTooltip id="item">{text}</BTooltip>;

    if (typeof text !== 'undefined') {
      return (
        <OverlayTrigger placement={placement} overlay={tooltip}>
          {children}
        </OverlayTrigger>
      );
    }

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Tooltip;
export { Tooltip }
