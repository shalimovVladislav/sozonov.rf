import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import classes from './Home.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cityImage from '@/assets/c38459ae21391acd58d47e165a458b0b.jpg';

const Home = () => {
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClickOnLearnMoreBtn = () => {
        navigate('/about');
    };

    useEffect(() => {
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <main className={classes['home-bg']}>
                <Navbar />
                <div className={classes['flex-container']}>
                    <div className={classes['text-container']}>
                        <h1 className={classes['color-white']}>МСНАБ</h1>
                        <p className={classes['color-white']}>
                            Используй момент по максимуму
                        </p>
                        <div className={classes['btn-container']}>
                            <button className={classes['color-white']} onClick={handleClickOnLearnMoreBtn}>Узнать подробнее</button>
                            <button className={classes['color-white']} >
                                <Link className={classes['color-white']} to={'http://parser.msnab-it.ru/'}>Синтаксический подбор аналога</Link>
                            </button>
                            <button className={classes['color-white']} >
                                <Link className={classes['color-white']} to={'http://analog.msnab-it.ru/'}>Параметрический подбор аналога</Link>
                            </button>
                        </div>
                    </div>
                    <div className={classes['img-container']}>
                        <img src={cityImage} alt="city skyscraper" />
                        <div className={classes['offset-border']}></div>
                    </div>
                </div>
                <div className={classes['bg-trafics-map']}>
                    <div className={classes['flex-container-column']}>
                        <div className={classes['text-container']}>
                            <h1 className={classes['color-primal']}>
                                Мы помогаем работать быстро и эффективно
                            </h1>
                            <p className={classes['color-primal']}>
                                По данным исследования «Повышение производительности при работе с автоматизированными сервисами для снабжения»
                            </p>
                        </div>
                        <button className={classes['color-white']}>Скачать сейчас</button>
                    </div>
                </div>
            </main>
            <Footer ref={footer}/>
        </>
    )
};

export default Home;