import MenuItem from "./Menuitem";

const Menu = ({ cartItem, menuConfig }) => {
  return (
    <ul className="nav nav-pills">
      {menuConfig.map((item, index) => {
        return (
          <MenuItem
            cartItem={cartItem}
            key={index}
            menuText={item.menuText}
            menuLink={item.menuLink}
            active={item.isActive}
          />
        );
      })}
    </ul>
  );
};
export default Menu;
