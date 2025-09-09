import { NavLink } from "react-router";
import styles from "./AuthSidebar.module.scss";
function AuthSidebar() {
  const navItems = [
    {
      to: "/login",
      title: "Đăng nhập",
    },
    {
      to: "/register",
      title: "Đăng ký",
    },
    {
      to: "/forgotpassword",
      title: "Quên mật khẩu",
    },
  ];
  return (
    <nav className={styles.wrapper}>
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={item.to}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
export default AuthSidebar;
