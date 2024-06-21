import { createContext, useState } from 'react';
import { Outlet, useLocation, matchPath } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export const hafizahContext = createContext();

export default function Layout() {
    return (
        <hafizahContext.Provider value={{}}>
            <Navbar />
            <section className="min-h-screen">
                <Outlet />
            </section>
            {<Footer />}
        </hafizahContext.Provider>
    );
}
