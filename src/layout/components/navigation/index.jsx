import { NavLink } from "react-router";
import styles from "./navigation.module.scss";
function Navigation() {
  const navItem = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/about",
      title: "About",
    },
    {
      to: "/posts",
      title: "Post",
    },
    {
      to: "/admin",
      title: "Admin",
    },
  ];
  return (
    <nav className={styles.nav}>
      {navItem.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
export default Navigation;
