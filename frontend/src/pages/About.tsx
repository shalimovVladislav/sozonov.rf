import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './About.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoBG from '@/assets/logo_bg.png';
import AboutPageImg1 from '@/assets/aboutPage_img1.png';
import AboutPageImg2 from '@/assets/aboutPage_img2.png';
import AboutPageImg3 from '@/assets/aboutPage_img3.png';
import AboutPageImg4 from '@/assets/aboutPage_img4.png';
import CheckIcon from '@/assets/free-icon-check-1828640.png';
import DescriprionImg from '@/assets/photo_2023-02-12_21-45-29.jpg';

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
                        <p className={classes['color-black']}>
                            Наша компания специализируется на производстве и поставке высококачественных комплектов кровопроводящих магистралей для гемодиализа. Мы предлагаем инновационные решения, которые обеспечивают надежную и безопасную процедуру перитонеального диализа для пациентов. Наша продукция отвечает самым высоким стандартам качества и безопасности, что делает нас надежным партнером для медицинских учреждений и специалистов в области гемодиализа. Мы стремимся к постоянному совершенствованию наших изделий, чтобы обеспечить максимальный комфорт и эффективность лечения наших клиентов.
                        </p>
                    </div>
                </div>
                <div className={classes.advantages}>
                    <div className={`${classes.advantage} ${classes.left}`}>
                        <img src={CheckIcon} alt="" />
                        <p>
                        Магистрали изготовлены из 
медицинского PVC, 
обеспечивающего гибкость, 
прочность и химическую 
стойкость.
                        </p>
                    </div>
                    <div className={`${classes.advantage} ${classes.right}`}>
                        <img src={CheckIcon} alt="" />
                        <p>
                        Продуманная конструкция с 
соединениями и клапанами 
для быстрого и удобного 
подключения к 
оборудованию.
                        </p>
                    </div>
                    <div className={`${classes.advantage} ${classes.left}`}>
                        <img src={CheckIcon} alt="" />
                        <p>
                        Комплекты поставляются в 
стерильной упаковке, 
готовые к использованию 
без дополнительной 
обработки.
                        </p>
                    </div>
                </div>
                <div className={classes.description}>
                    <div className={classes['text-container']}>
                        <div>
                        Выбор комплектации:
                            <p className={classes['list-item']}>
                            Ознакомьтесь с различными вариантами 
комплектов, подходящих для ваших 
нужд.
                            </p>
                        </div>
                        <br />
                        <div>
                            Оформление заказа:
                            <p className={classes['list-item']}>
                            Свяжитесь с нами через форму на сайте 
или по телефону, и мы поможем 
оформить заказ.
                            </p>
                        </div>
                        <br />
                        <div>
                            Доставка и оплата:
                            <p className={classes['list-item']}>
                            Мы предлагаем различные удобные 
способы доставки и оплаты для вашего 
медучреждения.

                            </p>
                        </div>
                    </div>
                    <img src={DescriprionImg} alt="" />
                </div>
                <Footer ref={footer}/>
            </div>
        </main>
    )
};

export default About;