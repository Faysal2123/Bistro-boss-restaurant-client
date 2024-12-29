import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const NavOptions =  (
        <>
          <li>
            <NavLink to='/'>HOME</NavLink>
          </li>
         <li>
            <NavLink to='/contactUs'>CONTACT US</NavLink>
         </li>
          <li>
            <NavLink to='/dashboard'>DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>OUR MENU</NavLink>
          </li>
          <li>
            <NavLink to='/shop'>OUR SHOP</NavLink>
          </li>
        </>
      );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {NavOptions}
            </ul>
          </div>
          <div className="">
          <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
          <h1 className="text-xl font-semibold">Restaurant</h1>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {NavOptions}
          </ul>
        </div>
        <div className="">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
