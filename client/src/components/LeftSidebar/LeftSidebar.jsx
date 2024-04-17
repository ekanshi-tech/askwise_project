import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
// import Globe from "../../assets/Globe.svg";
import ques from "../../assets/questions.png"
import home from "../../assets/home-button.png"
import tag from "../../assets/price-tag.png"
import man from "../../assets/man.png"

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div
      className="left-sidebar"
      style={slideIn ? slideInStyle : slideOutStyle}
    >
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <div className="home-btn">
              <img src={home} alt="" height="30px" width="30px" />
              <p>Home</p>
            </div>
          </NavLink>
        </button>
        <div className="side-nav-div">
  
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img src={ques} alt="Globe" height="35px" width="35px" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links btn"
              activeclassname="active"
              style={{ paddingLeft: "10px" }}
            >
              <img src={tag} alt="" height="25px" width="25px" />
              <p>Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links btn"
              activeclassname="active"
              style={{ paddingLeft: "10px" }}
            >
              <img src={man} alt="" height="25px" width="25px" />
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
