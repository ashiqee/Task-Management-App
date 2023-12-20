
import { useLottie } from "lottie-react";
import banner from "./Banner-Task.json";

const BannerTask = ({ height }) => {
    const options = {
        animationData: banner,
        loop: true
    };


    const style = {
        height: height,
    };

    const { View } = useLottie(options, style);

    return <>{View}</>;
};


export default BannerTask;