import { Link } from "react-router-dom";
import Button from "../../Components/Shared/Button/Button";
import BannerTask from "../../assets/hooks/Animation/BannerTask/BannerTask";

import './styles.css'

const Banner = () => {
    return (
        <div className=" w-screen">
            <div className="md:flex justify-between  items-center   gap-2">
                <div className="md:w-1/2 items-center bg-shadow  text-center">
                    <Link to='/login'><Button text={"Explore"} /></Link>
                </div>
                <div className="md:w-1/2 logo react">
                    <BannerTask height={450} />
                </div>
            </div>
        </div>
    );
};

export default Banner;