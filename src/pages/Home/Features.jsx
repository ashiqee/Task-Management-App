import { FaCode, FaBuilding, FaMoneyBill } from 'react-icons/fa'
import BgShadow from '../../Components/Shared/BgComponents/BgShadow';

const Features = () => {
    const occupasion = [
        {
            title: 'Developers',
            description: 'Empower your development team with our task management app designed to streamline project workflows. Developers can efficiently organize tasks, collaborate on projects, and enhance overall productivity. Whether you are working on coding sprints or managing software releases, our app is tailored to meet the unique needs of developers.',
            icon: <FaCode />,
        },
        {
            title: 'Corporate Professionals',
            description: 'Transform the way corporate professionals manage tasks and projects. Our task management app provides a centralized platform for corporate teams to plan, organize, and execute tasks seamlessly. Enhance communication, track progress, and achieve corporate goals efficiently. From project managers to executives, our app supports the diverse needs of corporate professionals.',
            icon: <FaBuilding />,
        },
        {
            title: 'Bankers',
            description: 'Optimize task management for banking professionals with our comprehensive app. Bankers can efficiently track financial tasks, manage client relationships, and ensure compliance. Improve workflow efficiency, coordinate seamlessly with team members, and stay on top of critical deadlines. Our task management app is tailored to enhance productivity in the dynamic banking industry.',
            icon: <FaMoneyBill />,
        },
    ];
    return (
        <div>

            <section className=" rounded-2xl py-12">
                <div className="container mx-auto text-center">

                    <div className='mb-5 '>
                        <h2 className="text-3xl font-bold mb-6">Who Can Benefit from Our Task Management web App?</h2>
                        <p className="text-lg w-3/4 mx-auto text-gray-200">
                            Our task management web app is designed to empower a diverse range of professionals. Developers can streamline project workflows, corporate professionals can enhance collaboration and execution, and bankers can optimize task management for financial operations. Explore the tailored benefits for your industry and elevate your productivity with our intuitive and efficient solution.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-3 justify-center gap-4'>
                        {
                            occupasion.map((o, i) => (
                                <BgShadow key={i}>
                                    <div className="bg-base-100 space-y-4 p-6 min-h-[350px] rounded-lg animate-pulse hover:scale-100  shadow-lg">
                                        <div className="w-12 mx-auto text-4xl text-center  text-[#84b9ff]">{o.icon} </div>
                                        <h3 className="text-xl text-[#2d72cb] font-semibold mb-4">{o.title}</h3>

                                        <p className="text-gray-100 text-justify">{o.description}</p>

                                    </div>
                                </BgShadow>
                            ))
                        }
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Features;