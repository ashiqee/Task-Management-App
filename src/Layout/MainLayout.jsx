
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../pages/Home/Footer';

const MainLayout = () => {
    return (
        <div >

            <div className='container mx-auto'>
                <Navbar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;