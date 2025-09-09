import Navigation from "../../../components/navigation";
import styles from "./AdminHeader.module.scss";
function AdminHeader() {
  return (
    <h1 className={styles.headerAdmin}>
      Admin Header
      <Navigation />
    </h1>
  );
}
export default AdminHeader;
