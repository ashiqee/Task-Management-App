import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import useAuth from "../../../hooks/useAuth";
import Logo from "../../../hooks/Animation/Logo/Logo";


const Navbar = () => {
    const { user, logOut } = useAuth()



    const activeCss = "border-b-4 p-2 pb-5 border-[#2d72cb] text-[#2d72cb] hover:border-white font-bold hover:text-white";
    const notActiveCss = "pb-5 p-2 text-white hover:border-b-4 font-bold border-[#2d72cb] hover:text-[#2d72cb]"
    const navMenu = <>
        <ul className="md:flex gap-5 hidden uppercase">
            <li>
                <NavLink to="/"
                    className={({ isActive }) =>
                        isActive
                            ? activeCss
                            : notActiveCss
                    }>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard"
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
                {user ? <>   <div className="flex gap-3">
                    <span>
                        <Link to='/dashboard'>
                            <Button text={"Dashboard"} />
                        </Link>

                    </span>
                    <span onClick={() => logOut()}>
                        <Button text={"Sign Out"} />
                    </span>
                </div>  </> :
                    <>
                        <Link to='/login'>  <Button text={"Sign In"} /> </Link></>}
            </div>
        </div>
    );
};

export default Navbar;