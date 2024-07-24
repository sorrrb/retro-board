import PropTypes from "prop-types";

// Helper obj used to access CDN -- [key, value] corresponds with key representing a functional icon identifier and value representing a str (or array of strings) of filenames on the CDN
const iconPathsCDN = {
  // Color icon styled icons
  color: {
    logo: "chat--v1",
    avatarAnonymous: "anonymous",
    avatarBubbleMale: ["circled-user-male-skin-type-1-2--v1", "circled-user-male-skin-type-3--v1", "circled-user-male-skin-type-4--v1"],
    avatarBubbleFemale: ["circled-user-female-skin-type-1-2--v1", "circled-user-female-skin-type-3--v1", "circled-user-female-skin-type-4--v1"],
    itemSend: "sent--v1",
    priorityHigh: "high-priority",
    priorityLow: "low-priority",
    priorityMedium: "medium-priority",
    teamMembers: "conference-call--v1",
    themeDark: "full-moon",
    themeLight: "sun--v1",
    timer: "timer--v1",
  },

  // iOS Filled styled icons
  "ios-filled": {
    layoutHorizontal: "stripped-patterns",
    layoutVertical: "stripped-patterns-2"
  },

  // iOS Glyphs styled icons
  "ios-glyphs": {
    close: "delete-sign",
    visibilityHidden: "invisible",
    visibilityShown: "visible--v1"
  }

}

// Helper func used to format (and return) a given set of valid, passed component props
const getPathURL = (name, variant, style, size, fillColor, hasCustomColor) => {
  let pathURL;
  const hasMultipleIconStyles = (variant !== null); // Checks to see if prop value is type array [multiple icon variants] or type string [one icon variant]
  const iconPath = (hasMultipleIconStyles ? iconPathsCDN[style][name][variant] : iconPathsCDN[style][name]);
  pathURL = (hasCustomColor ?
    `${style}/${size}/${fillColor}/${iconPath}.png` :
    `${style}/${size}/${iconPath}.png`);
  return pathURL;
}

function Icon({ name, classList, variant = null, descriptor, style = "color", size = 24, fillColor = "default" }) {
  const baseURL = "https://img.icons8.com/";
  const hasCustomColor = (fillColor !== "default");
  const srcURL = baseURL + getPathURL(name, variant, style, size, fillColor, hasCustomColor);

  return (
    <img
      className={classList}
      src={srcURL}
      title={descriptor}
      height={size}
      width={size}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  classList: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  variant: PropTypes.number,
  descriptor: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.number,
  fillColor: PropTypes.string,
}

export default Icon;
