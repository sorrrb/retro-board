import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';

function IconButton({ btnClassList, imgClassList, subtext = null, iconName, iconVariant = null, iconTitle, iconStyle = 'color', iconSize, iconFill = 'default', onClick }) {
  const containsSubtext = (subtext !== null);
  const genericBtnClass = 'btn--icon';

  // Helper function designed to apply a valid class string from a given class name string/array of class names
  const formatClasses = (classList, defaultClass = genericBtnClass) => {
    const hasNoClasses = (classList === null || classList === undefined);
    if (hasNoClasses) return defaultClass;
    else {
      const hasSingleClass = typeof (classList) === 'string';
      const hasSingleClassInList = typeof (classList) === 'object' && classList.length === 1;
      const hasMultipleClasses = typeof (classList) === 'object' && classList.length > 1;

      if (hasSingleClass) return `${defaultClass} ${classList}`;
      else if (hasSingleClassInList) return `${defaultClass} ${classList[0]}`;
      else if (hasMultipleClasses) return `${defaultClass} ${classList.join(' ')}`;
      else console.error(`Error in conditional branch of class formatting for ${iconName} button`);
    }
  }

  return (
    <button className={formatClasses(btnClassList, genericBtnClass)} onClick={onClick}>
      <Icon
        name={iconName}
        classList={formatClasses(imgClassList, 'file--icon')}
        variant={iconVariant}
        descriptor={iconTitle}
        style={iconStyle}
        size={iconSize}
        fillColor={iconFill}
      />
      {containsSubtext ?
        <span>{subtext}</span> :
        <></>
      }
    </button>
  )
}

IconButton.propTypes = {
  btnClassList: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  imgClassList: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  subtext: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconVariant: PropTypes.number,
  iconTitle: PropTypes.string,
  iconStyle: PropTypes.string,
  iconSize: PropTypes.number,
  iconFill: PropTypes.string,
  onClick: PropTypes.func
}

export default IconButton;
