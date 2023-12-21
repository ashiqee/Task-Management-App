import axios from "axios";
import { Navigate } from "react-router-dom";

import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();



    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (res) => {
                // console.log(res);

                return res;
            },
            (error) => {
                console.log("error tracked", error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    console.log("logOut User");
                    logOut().then(() => {
                        <Navigate to="/login" />;
                    });
                }
            }
        );
    }, [logOut]);

    return axiosSecure;
};

export default useAxiosSecure;