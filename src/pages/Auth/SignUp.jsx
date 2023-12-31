import { Link, Navigate } from "react-router-dom";
import BgShadow from "../../Components/Shared/BgComponents/BgShadow";
import Button from "../../Components/Shared/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Logo from "../../hooks/Animation/Logo/Logo";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SignUp = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordAlert, setPasswordAlert] = useState(null)
    const { createUser, updateCurrentUser, googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()




    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (password !== e.target.value) {
            setPasswordAlert(true)

        } else {
            setPasswordAlert(false)

        }

    }


    const handleGoogleLogin = () => {
        googleLogin()
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const occupation = form.occupation.value;
        const profileImg = "https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_640.jpg"


        const userInfo = {
            name: name,
            email: email,
            profileImg: profileImg,
            occupation: occupation,



        }
        createUser(email, password).then((result) => {

            const newUser = result.user;

            updateCurrentUser(name, profileImg).then(() => {
                console.log('Update Success');
            })
        })

        await axiosPublic.post('/user', userInfo).then(res => {
            if (res.data.insertedId) {
                console.log("User Registration Successfull");
                <Navigate to='/'></Navigate>
            }
        })

    }
    return (



        <div className="container mx-auto">


            <section className="">
                <div className="relative" >
                    <nav className="flex px-10 py-5 justify-between">
                        <Link to='/'><Logo height={96} /></Link>
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
                                <button onClick={handleGoogleLogin} className="btn flex justify-center items-center gap-2 text-center w-full">


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
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                                            <input type="text" name="occupation" id="occupation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Occupation" required="" />
                                        </div>


                                    </div>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Photo</label>
                                            <input type="file" name="photo" id="photo" className="bg-gray-50 
                                             border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                               dark:text-white dark:focus:ring-blue-500
                                                dark:focus:border-blue-500" placeholder="" required="" />
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