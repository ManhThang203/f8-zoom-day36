import styles from "./Header.module.scss";
import Navigation from "../navigation";
function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
export default Header;
