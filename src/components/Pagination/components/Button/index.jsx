import clsx from "clsx";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
const Button = ({ children, onClick, isDisabled }) => {
  const classNames = clsx(styles.btn);
  return (
    <button disabled={isDisabled} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
Button.prototype = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
export default Button;
