import "./Header.css";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="main-header">
      <img src={Logo} alt="React Challenge Logo" />
    </header>
  );
};

export default Header;
