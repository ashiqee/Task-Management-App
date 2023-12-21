import { Link } from "react-router-dom";
import BgShadow from "../../Components/Shared/BgComponents/BgShadow";
import Button from "../../Components/Shared/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";


const SignUp = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordAlert, setPasswordAlert] = useState(null)



    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (password !== e.target.value) {
            setPasswordAlert(true)
            console.log('password doest match');
        } else {
            setPasswordAlert(false)
            console.log('password matched');
        }

    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword);
    }
    return (



        <div className=" w-screen  md:h-screen">


            <section className="">
                <div className="relative" >
                    <nav className="flex px-10 py-5 justify-between">
                        <BgShadow> <h2 className="text-2xl font-bold">Task</h2></BgShadow>
                        <div className="flex items-center gap-2">
                            <span>Already playing with Task App?



                            </span>
                            <Link to='/login'>
                                <Button text={"Login"} />
                            </Link>


                        </div>
                    </nav>
                </div>
                <div className="flex  flex-col items-center justify-center mx-auto lg:py-0">

                    <BgShadow>
                        <div className="md:w-[600px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className=" p-6 space-y-3 md:space-y-3 sm:p-8">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Let Go!
                                </h1>
                                <button className="btn flex justify-center items-center gap-2 text-center w-full">


                                    <FcGoogle /> Sign up with google

                                </button>
                                <div className="divide-dashed divide-white"></div>
                                <form className="space-y-4 md:space-y-4 " onSubmit={handleSignUp}>
                                    <div className="md:flex gap-4">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joun Duo" required="" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>

                                    </div>
                                    <div className="md:flex mb-1  gap-4">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>

                                        <div>

                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                            <input type="confirm-password" onChange={handleConfirmPassword} name="confirmPassword" id="confirmPassword" placeholder="••••••••"
                                                className={!passwordAlert ? "bg-green-500 border border-green-600 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    : "bg-red-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                                required="" />

                                        </div>

                                    </div>
                                    {passwordAlert && <><p className="text-red-500">Password doesn't match</p></>}

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-2 text-sm">
                                            <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    {passwordAlert ? <> <button disabled type="submit"
                                        className="w-full  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                                         focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                         text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Create an account</button></> : <> <button type="submit"
                                            className="w-full  text-white bg-primary-600 hover:bg-primary-700 focus:ring-4
                                         focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 
                                         text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            Create an account</button></>}
                                    <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?
                                        <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </BgShadow>
                </div>
            </section>

        </div>





    );

};

export default SignUp;