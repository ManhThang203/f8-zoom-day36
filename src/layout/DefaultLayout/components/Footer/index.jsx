import { Link, NavLink } from "react-router";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to={"/privacy"}
      >
        Privacy
      </NavLink>
    </footer>
  );
}
export default Footer;
