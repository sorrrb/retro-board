import PropTypes from 'prop-types';
import { useState } from 'react';
import Icon from '../../Icon/Icon';

function IconButton({ btnClass, subtext = null, iconName, iconVariant = null, iconAlt, iconStyle = 'color', iconSize, iconFill = 'default', onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const containsSubtext = (subtext !== null);

  return (
    <button className={btnClass} onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Icon
        name={iconName}
        variant={iconVariant}
        descriptor={iconAlt}
        style={iconStyle}
        size={iconSize}
        fillColor={iconFill}
      />
      {containsSubtext && isHovered ?
        <p>{subtext}</p> :
        <span>-</span>
      }
    </button>
  )
}

IconButton.propTypes = {
  btnClass: PropTypes.string,
  subtext: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconVariant: PropTypes.number,
  iconAlt: PropTypes.string,
  iconStyle: PropTypes.string,
  iconSize: PropTypes.number,
  iconFill: PropTypes.string,
  onClick: PropTypes.func
}

export default IconButton;
