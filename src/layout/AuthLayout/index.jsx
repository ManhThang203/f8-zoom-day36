import { Outlet } from "react-router";
import Header from "../components/Header";
import styles from "./AuthLayout.module.scss";
import AuthSidebar from "./components/AuthSidebar";
function Authlayout() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AuthSidebar />
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Authlayout;
