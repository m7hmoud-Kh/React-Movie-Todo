import {  Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";


const Layout = () => {


    return (
        <>
        <NavBar />
        <div className='container'>
            <Outlet />
        </div>
        </>
    );
};

export default Layout;
