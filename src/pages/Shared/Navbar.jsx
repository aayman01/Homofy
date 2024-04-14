import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import './Navbar.css';
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user)
  const [fix, setFix] = useState(false);

  const onScrollChange = () => {
    if(window.scrollY >= 200){
      setFix(true)
    }else{
      setFix(false)
    }
  }

  window.addEventListener('scroll',onScrollChange)

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " font-medium border-2 hover:bg-[#00C194] text-[#00C194] hover:text-white border-[#00C194]"
              : "text-black md:text-[#00C194] text-base"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-medium border-2 hover:bg-[#00C194] text-[#00C194] hover:text-white border-[#00C194]"
              : "text-black md:text-[#00C194] text-base"
          }
          to="/updateprofile"
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-medium border-2 hover:bg-[#00C194] text-[#00C194] hover:text-white border-[#00C194]"
              : "text-black md:text-[#00C194] text-base"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-medium border-2 hover:bg-[#00C194] text-[#00C194] hover:text-white border-[#00C194]"
              : "text-black md:text-[#00C194] text-base"
          }
          to="/login"
        >
          Log in
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={
        fix ? "newFixed navbar fixed z-10 px-4" : "navbar mt-3 fixed z-10 px-4"
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-12 h-12 rounded-full hidden md:block"
            src={logo}
            alt=""
          />
          <a className="btn btn-ghost text-3xl font-semibold text-[#00C194]">
            Homofy
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex flex-row gap-2 items-center">
            <div tabIndex={0} className="avatar mr-3">
              <button
                className="w-10 rounded-full tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img className="rounded-full" src={user?.photoURL} />
              </button>
            </div>
            <button
              onClick={logOut}
              className="btn border-0 bg-[#00C194] text-white font-semibold"
            >
              Log out
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn border-0 bg-[#00C194] text-white font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
