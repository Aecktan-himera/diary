import "./Header.css";
import Image from "../../assets/Image.svg";

const Header = ({ children }) => {
  return (
    <>
      <img className="logo" src="/logo.svg" alt="Логотип" />
    </>
  );
};

export default Header;
