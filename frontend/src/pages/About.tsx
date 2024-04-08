import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './About.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutPageImg1 from '@/assets/istockphoto-1363734940-612x612.jpg';
import AboutPageImg2 from '@/assets/fura1.jpg';
import AboutPageImg3 from '@/assets/zachem-nuzhen-sklad.jpg';
import AboutPageImg4 from '@/assets/istockphoto-520619396-612x612.jpg';
import CheckIcon from '@/assets/icons8-check-100.png';
import DescriprionImg from '@/assets/homePage_bg_logistic_map.png';

const About = () => {
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <main className={classes['bg-color-w']}>
            <div className={classes.content}>
                <Navbar />
                <div className={classes['flex-container']}>
                    <div className={classes['text-container']}>
                        <p>Наш комплекс — это новый шаг в будущее.</p>
                    </div>
                    <div className={classes['img-container']}>
                        <img src={AboutPageImg1} alt="" />
                        <img src={AboutPageImg2} alt="" />
                        <img src={AboutPageImg3} alt="" />
                        <img src={AboutPageImg4} alt="" />
                    </div>
                </div>
                <div className={classes.advantages}>
                    <div className={`${classes.advantage} ${classes.left}`}>
                        <img src={CheckIcon} alt="" />
                        <p className={classes['color-red']}>
                            Автоматический поиск и подбор аналогов по множеству параметров.
                        </p>
                    </div>
                    <div className={`${classes.advantage} ${classes.right}`}>
                        <img src={CheckIcon} alt="" />
                        <p className={classes['color-red']}>
                            Цифровое стимулирование предприятия к поиску возможностей повышения своей конкурентоспособности.
                        </p>
                    </div>
                    <div className={`${classes.advantage} ${classes.left}`}>
                        <img src={CheckIcon} alt="" />
                        <p className={classes['color-red']}>
                            Точная информация о состоянии номенклатурных групп и рост товарных запасов без затоваривания складов
                        </p>
                    </div>
                </div>
                <div className={classes.description}>
                    <div className={classes['text-container']}>
                        <p>
                           География поставок
                        </p>
                    </div>
                    <img src={DescriprionImg} alt="" />
                </div>
                <Footer ref={footer}/>
            </div>
        </main>
    )
};

export default About;