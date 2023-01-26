const MenuItem = ({ cartItem, menuText, menuLink, active }) => {
  return (
    <li className="nav-item  " style={{ position: "relative" }}>
      <a
        target="_blank"
        rel="noreferrer"
        href={menuLink}
        className={active ? "nav-link active" : "nav-link"}
        aria-current="page"
      >
        {menuText}
        {menuText === "Cart" ? (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {cartItem.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
};

export default MenuItem;
