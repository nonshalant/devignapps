import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Single button primitive: renders a <Link>, <a> or <button> depending on the
 * props it receives, so every call-to-action on the site shares one style.
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon aria-hidden="true" className="btn__icon" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
