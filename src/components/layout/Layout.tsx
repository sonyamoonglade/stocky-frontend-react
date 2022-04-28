import React, {FC, ReactChild} from 'react';
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import './layout.scss'


interface layoutProps {
    children: React.ReactNode[] | React.ReactNode
}

const Layout:FC<layoutProps> = (props) => {
    console.log('render layout')

    return (
            <div className="container">
                <div className="dash">
                    <Sidebar />
                    <Header  />
                </div>
                <main className='main-container'>
                    {props.children}
                </main>
            </div>

    );
};

export default Layout;