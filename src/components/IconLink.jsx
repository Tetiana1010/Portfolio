import PropTypes from "prop-types";

const IconLink = ({ href, children, className }) => (
  <a
    href={href}
    className={`icon ${className}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default IconLink;

