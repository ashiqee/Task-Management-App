
import { useLottie } from "lottie-react";
import logo from "./logo-task.json";


const Logo = ({ height }) => {
    const options = {
        animationData: logo,
        loop: true
    };


    const style = {
        height: height,
    };

    const { View } = useLottie(options, style);

    return <>{View}</>;
};

export default Logo;