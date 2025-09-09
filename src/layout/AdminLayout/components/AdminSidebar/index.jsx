import { NavLink } from "react-router";
import styles from "./AdminSidebar.module.scss";
function AdminSidebar() {
  const sidebarItem = [
    {
      to: "/admin",
      title: "Dashboard",
      end: true, // Đảm bảo link này chỉ active khi ở đúng path /admin
    },
    {
      to: "/admin/users",
      title: "Users",
    },
    {
      to: "/admin/settings",
      title: "Setting",
    },
  ];
  return (
    <nav className={styles.wrapper}>
      {sidebarItem.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
export default AdminSidebar;
