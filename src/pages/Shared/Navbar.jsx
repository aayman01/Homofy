import { NavLink } from "react-router-dom";


const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-medium border-2 hover:bg-[#00C194] text-[#00C194] hover:text-white border-[#00C194]"
              : "text-black md:text-white hover:underline decoration-[#00C194]"
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
              : "text-black md:text-white hover:underline decoration-[#00C194]"
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
              : "text-black md:text-white hover:underline decoration-[#00C194]"
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
              : "text-black md:text-white hover:underline decoration-[#00C194]"
          }
          to="/login"
        >
          Log in
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar mt-3 absolute z-10 max-w-6xl mx-auto lg:right-10">
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
        <a className="btn btn-ghost text-3xl font-semibold text-[#00C194]">Homofy</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end mr-9">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="" />
          </div>
        </label>
        {/* {user ? (
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            )} */}
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
