import { Outlet } from "react-router";
import styles from "./AdminLayout.module.scss";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import AdminHeader from "./components/AdminHeader";
function AdminLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <AdminHeader />
      </header>
      <div className={styles.wrapper}>
        <section className={styles.sidebar}>
          <AdminSidebar />
        </section>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}>
        <AdminFooter />
      </footer>
    </div>
  );
}
export default AdminLayout;
