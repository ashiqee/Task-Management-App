
import { useLottie } from "lottie-react";
import loadingJson from "./Loading-j.json";

const Loading = () => {
    const options = {
        animationData: loadingJson,
        loop: true

    };

    const { View } = useLottie(options);

    return <>{View}</>;
};

export default Loading;