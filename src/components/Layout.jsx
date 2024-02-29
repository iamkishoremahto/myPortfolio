
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import Navigation from './Navigation';


import "../index.css";


export default function Layout() {


    return (
        <>  
            <div className={` mainWrapper transition-all ease-in-out duration-150 flex items-center flex-col p-11 font-roboto justify-start  min-h-screen min-w-screen bg-[url('/images/bg-desktop.jpg')] dark:bg-[url('/images/bg-dark.jpg')] bg-no-repeat bg-cover`}>

            <Header />
            <main className='flex lg:container flex-col lg:flex-row items-center justify-between pt-11 gap-3'>
                <Intro />
                <div className="outletWrapper overflow-auto">
                <Outlet />
                <footer> Footer </footer>
                </div>
                
                <Navigation/>
            </main>
           
            </div>
            
        </>
    );

}