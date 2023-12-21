import { Link } from "react-router-dom";
import Button from "../../Components/Shared/Button/Button";

import BannerTask from './../../hooks/Animation/BannerTask/BannerTask';

import './styles.css'

const Banner = () => {
    return (
        <div className="">
            <div className="md:flex justify-around  items-center   gap-2">
                <div className="md:w-1/2 items-center bg-shadow ">
                    <div className="p-20 space-y-6 ">
                        <h2 className="text-4xl font-bold uppercase">Online Task <br /> Management Application</h2>
                        <p className="mb-20">Organize and manage your team like a boss with TaskAM, a free task management tool packing more capabilities than you can imagine.</p>
                        <Link to='/dashboard'><Button top={10} text={"Let’s Explore"} /></Link>
                    </div>
                </div>
                <div className="md:w-1/2  logo react">
                    <BannerTask height={650} />
                </div>
            </div>
        </div>
    );
};

export default Banner;