import React from "react";
import style from "./style.module.css";

function Header() {
  return (
    <div>
      <div className={style.header}>
        <h1 className={style.notes__title}>Notes</h1>
      </div>
    </div>
  );
}

export default Header;
