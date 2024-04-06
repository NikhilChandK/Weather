import { NavLink } from "react-router-dom";
// import Styles from './Cards.module.css'

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Weather ForeCast</NavLink>
      {/* <NavLink to='/today'> BroadCast</NavLink> */}
    </nav>
  );
}
