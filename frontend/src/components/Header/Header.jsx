import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IoHome,
  IoHomeOutline,
  IoAddOutline,
  IoAdd,
  IoSearchOutline,
  IoSearch,
} from "react-icons/io5";
import { MdOutlineAccountCircle, MdAccountCircle } from "react-icons/md";


function Header() {
  const [tab, setTab] = useState(window.location.pathname);
  
  return (
    <div className="header">
      <Link to="/" onClick={() => setTab("/")}>
        {tab === "/" ? <IoHome style={{ color: "black" }} /> : <IoHomeOutline />}
      </Link>

      <Link to="/newpost" onClick={() => setTab("/newpost")}>
        {tab === "/newpost" ? (
          <IoAdd style={{ color: "black" }} />
        ) : (
          <IoAddOutline />
        )}
      </Link>

      <Link to="/search" onClick={() => setTab("/search")}>
        {tab === "/search" ? (
          <IoSearch style={{ color: "black" }} />
        ) : (
          <IoSearchOutline />
        )}
      </Link>

      <Link to="/account" onClick={() => setTab("/account")}>
        {tab === "/account" ? (
          <MdAccountCircle style={{ color: "black" }} />
        ) : (
          <MdOutlineAccountCircle />
        )}
      </Link>
    </div>
  )
}

export default Header;
