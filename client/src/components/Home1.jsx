import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard.jsx";
import Navbar from "./Navbar.jsx";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

function Homepage1({ filterid }) {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const email = await sessionStorage.getItem("userEmail");
      // console.log(email);
      if (!email) {
        console.log("Hello invalid");
        navigate("/");
      }
    }
    checkSession();
  }, [])
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  const Navbar1 = () => {
    return (
      <>
        <header>
          <div class="topnav" id="myTopnav">
            <a href="/home1" class="active">
              Home
            </a>
            <a href="/compare">Compare</a>
            <a style={{ float: "right" }} href="/about">{sessionStorage.getItem("name")}</a>
            <a style={{ float: "right" }} href="/logout">Logout</a>
           
          </div>
          <div>
            <h1 className="head-title">
              <i className="fas fa-bolt"></i>{" "}
              <b>
                <i>My EV</i>
              </b>
            </h1>

            <center>
           
      <div className="compare-label1">
            <div  className="compare-cont1">
                <label htmlFor="bike2">
                  <b>Search</b>{" "}
                </label>
                <select
                  
                  name="bike2"
                  id="bike2"
                  onChange={(event) => {
                    const updatedList = Menu.filter((curElem) => {
                      return curElem.name === event.target.value;
                    });
                    setMenuData(updatedList);
                  }}
                >
                  {Menu.map((curElem) => {
                    return (
                      <>
                        <option key={curElem.id} value={curElem.name}>
                          {curElem.name}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              </div>
              
              </center>
          </div>
        </header>
      </>
    );
  };

  return (
    <>
      <Navbar1 />
      <div>
        
      </div>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard filterid={filterid} menuData={menuData} />
    </>
  );
}

export default Homepage1;
