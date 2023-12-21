
import { useLottie } from "lottie-react";
import loadingJson from "./Loading-j.json";

const Loading = () => {
    const options = {
        animationData: loadingJson,
        loop: true

    };

    const { View } = useLottie(options);

    return <><div className="h-screen container mx-auto flex justify-center items-center">
        {View}
    </div></>;
};

export default Loading;