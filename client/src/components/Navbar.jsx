import React, { useState } from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div>

      </div>
      <div className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                key={curElem.category}
                onClick={() => filterItem(curElem)}
              >
                <b>
                {curElem}
                </b>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
