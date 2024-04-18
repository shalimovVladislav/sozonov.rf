import React, { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Home.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from '@/assets/photo_2024-04-12_16-33-36.jpg';

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
                        <h1 className={classes['color-white']}>
                            Кровопроводящие магистрали для гемодиализа
                        </h1>
                        <p className={classes['color-white']}>
                            Компания предлагает высококачественные комплекты кровопроводящих магистралей. Наша продукция обеспечивает надежную и безопасную процедуру перитонеального диализа для пациентов.
                        </p>
                        <button className={classes['color-white']} onClick={handleClickOnLearnMoreBtn}>
                            Узнать подробнее
                        </button>
                    </div>
                    <div className={classes['img-container']}>
                        <img src={Image} alt="city skyscraper" />
                        <div className={classes['offset-border']}></div>
                    </div>
                </div>
                <div className={classes['bg-car-parking']}>
                    <div className={classes['flex-container-column']}>
                        <div className={classes['text-container']}>
                            <h1 className={classes['color-black']}>
                                Преимущества нашей продукции
                            </h1>
                            <p className={classes['color-black']}>
                                Качество:
                                Тщательное соблюдение стандартов производства и строгий контроль качества.
                            </p>
                            <p className={classes['color-black']}>
                                Инновации:
                                Постоянное совершенствование конструкции и материалов на основе новейших разработок.
                            </p>
                            <p className={classes['color-black']}>
                                Ответственность:
                                Безопасность пациентов и их здоровье - наш главный приоритет.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer ref={footer}/>
        </>
    )
};

export default Home;