import Header from '../UI/Header';
import Footer from '../UI/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
            {/* header and footer will be constant in all the routed pages but the middle sectons will be */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout;