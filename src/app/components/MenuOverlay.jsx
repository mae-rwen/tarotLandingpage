import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="  w-40 ml-4">
      <ul className="flex flex-col py-4 pl-2 items-start">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
