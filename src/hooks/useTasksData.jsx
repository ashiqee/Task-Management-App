
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useTasksData = () => {
    const axiosSecure = useAxiosSecure()
    const { loading, user } = useAuth()


    const { data, isPending, refetch } = useQuery({
        queryKey: ["taskData"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks/${user.email}`)

            return res.data
        }
    })

    return { data, isPending, refetch }
};

export default useTasksData;