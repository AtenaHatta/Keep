import { HiOutlineLightBulb, HiOutlineLogout } from "react-icons/hi";
import React from "react";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div>
          <HiOutlineLightBulb className="icon" />
          <h1>Keep</h1>
        </div>
        <HiOutlineLogout className="icon" />
      </div>
    </header>
  );
}

export default Header;
