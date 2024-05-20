import React from "react";
import headerLogo from "../../assets/img/headerLogo.png";
import headerTextLogo from "../../assets/img/headerTextLogo.png";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="headerImg">
            <img src={headerLogo} alt="" width={102} />
            <img src={headerTextLogo} alt="" />
          </div>
          <div className="headerNavigate">
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>
            <a href="">TECHNOLOGIES</a>
            <a href="">HOW TO</a>
          </div>
          <div className="headerBtn">
            <button className="hedBtn1">CONTACT US</button>
            <button className="hedBtn2">JOIN HYDRA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
