import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../index.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <>
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fas fa-bars' : null}`}></i>
        </div>
        <div class="d-flex text-white-50 justify-content-center border rounded-pill  mt-3 mb-1" style={{width:"200px", height:"42px" }}>
                <i class="fas fa-search mt-2">
                </i>
                <h6 class="ps-2 pe-5 me-5 mt-2">Search</h6>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <div className='navnav'>
          <div>
          <div class=" text-uppercase text-white fs-4 text-center mb-4">LOGO</div>

             {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>

         
        </div>
      </aside>
    </main>
  
     {/* const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return ( <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider> */}




    </>
  );
}

export default Navbar;