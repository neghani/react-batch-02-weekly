import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ cartItem, menuConfiguration }) => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Logo />
        <Menu cartItem={cartItem} menuConfig={menuConfiguration} />
      </header>
    </div>
  );
};

export default Header;
