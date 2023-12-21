import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import BgShadow from "../../Components/Shared/BgComponents/BgShadow";
import Button from "../../Components/Shared/Button/Button";


import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Logo from "../../hooks/Animation/Logo/Logo";
const Login = () => {
    const { signIn, googleLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;


        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        { navigate(from, { replace: true }) }

    }


    return (
        <div className="container mx-auto  ">


            <section className="">
                <div>
                    <nav className="flex px-10 py-5 justify-between">
                        {/* <BgShadow> <h2 className="text-2xl font-bold">Task</h2></BgShadow> */}
                        <Link to='/'><Logo height={96} /></Link>
                        <div className="md:flex items-center gap-2">
                            <span>Don't have an account?

                            </span>
                            <Link to='/signUp'>
                                <Button text={"Sign Up"} />
                            </Link>


                        </div>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

                    <BgShadow>
                        <div className="md:w-[600px]  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-3 md:space-y-3 sm:p-8">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Welcome Back!
                                </h1>
                                <button onClick={handleGoogleLogin} className="btn flex justify-center items-center gap-2 text-center w-full">


                                    <FcGoogle /> Sign up with google

                                </button>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label className="font-light text-gray-500 dark:text-gray-300">Remeber here <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">!</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full btn text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>

                                </form>
                                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account?
                                    <Link to='/signUp' className="font-medium ml-3 text-primary-600 hover:underline dark:text-primary-500">Sign Up</Link>
                                </p>
                            </div>
                        </div>
                    </BgShadow>
                </div>
            </section >

        </div >
    );
};

export default Login;