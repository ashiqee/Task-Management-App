import axios from "axios";



const axiosPublic = axios.create({
    baseURL: "https://task-management-app-server-self.vercel.app",
    withCredentials: true,
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;