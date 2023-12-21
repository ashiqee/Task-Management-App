import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../hooks/Animation/Logo/Logo";


const Navbar = () => {
    const { user, logOut } = useAuth()



    const activeCss = "border-b-4 p-2 pb-5 border-blue-600 hover:border-white font-bold hover:text-white";
    const notActiveCss = "pb-5 p-2 text-white hover:border-b-4 font-bold border-blue-600 hover:text-blue-600"
    const navMenu = <>
        <ul className="flex gap-5 uppercase">
            <li>
                <NavLink to="/" qqb
                    className={({ isActive }) =>
                        isActive
                            ? activeCss
                            : notActiveCss
                    }>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/addTask"
                    className={({ isActive }) =>
                        isActive
                            ? activeCss
                            : notActiveCss
                    }>

                    Add Task
                </NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs"
                    className={({ isActive }) =>
                        isActive
                            ? activeCss
                            : notActiveCss
                    }>

                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/contactUs"
                    className={({ isActive }) =>
                        isActive
                            ? activeCss
                            : notActiveCss
                    }>

                    Contact Us
                </NavLink>
            </li>
        </ul>
    </>
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Logo height={96} />
                {navMenu}
            </div>

            <div>
                {user ? <>     <span onClick={() => logOut()}>
                    <Button text={"Sign Out"} />
                </span>  </> :
                    <>
                        <Link to='/login'>  <Button text={"Sign In"} /> </Link></>}
            </div>
        </div>
    );
};

export default Navbar;