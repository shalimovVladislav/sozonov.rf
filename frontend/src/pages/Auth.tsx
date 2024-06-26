import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Auth.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';

const Auth = () => {
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <main>
            <div className={classes['bg-white']}>
                <Navbar />
                <AuthForm />
                <Footer ref={footer}/>
            </div>
        </main>
    )
};

export default Auth;