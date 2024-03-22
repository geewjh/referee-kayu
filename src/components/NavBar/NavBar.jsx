import { GiWhistle } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="navbar" data-theme="dim">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-white text-2xl">
          <div>
            <span className="italic font-light">Referee Kayu</span>
          </div>
          <GiWhistle className="text-3xl text-orange-100" />
        </NavLink>
      </div>

      <div className="italic font-light navbar-center">
        <ul className="menu menu-horizontal">
          <li className="px-12">
            <NavLink to="/">Teams</NavLink>
          </li>
          <li className="px-12">
            <NavLink to="/finished">Finished</NavLink>
          </li>
          <li className="px-12">
            <NavLink to="/standings">Standings</NavLink>
          </li>
          <li className="px-12">
            <NavLink to="/scheduled">Scheduled</NavLink>
          </li>
        </ul>
      </div>

      <div className="italic font-light navbar-end">
        <ul className="menu menu-horizontal">
          <li className="px-2.5">
            <NavLink to="/favourites">
              <BiSolidStar />
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
