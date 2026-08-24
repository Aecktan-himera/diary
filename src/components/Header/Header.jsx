import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Логотип" />
    </>
  );
};

export default Header;
