import React from 'react';
import classes from './About.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LogoBG from '@/assets/logo_bg.png';
import AboutPageImg1 from '@/assets/aboutPage_img1.png';
import AboutPageImg2 from '@/assets/aboutPage_img2.png';
import AboutPageImg3 from '@/assets/aboutPage_img3.png';
import AboutPageImg4 from '@/assets/aboutPage_img4.png';
import CheckIcon from '@/assets/check_icon.png';
import DescriprionImg from '@/assets/aboutPage_description_img.jpg';

const About = () => (
    <main className={classes['bg-color-w']}>
        <img className={classes['logo-bg-first']} src={LogoBG} alt="" />
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
                    <p>
                        Беспрерывная работа программно-аппаратного комплекса с использованием спутников GPS и ГЛОНАСС.
                    </p>
                </div>
                <div className={`${classes.advantage} ${classes.right}`}>
                    <img src={CheckIcon} alt="" />
                    <p>
                        Быстрая идентификация свободного парковочного места, путем отслеживания системами камер, датчиков и спутниковых систем GPS и ГЛОНАСС.
                    </p>
                </div>
                <div className={`${classes.advantage} ${classes.left}`}>
                    <img src={CheckIcon} alt="" />
                    <p>
                        Помощь в выборе оптимального маршрута во избежание аварий и нештатных ситуаций.
                    </p>
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes['text-container']}>
                    <p>
                        Приложение постоянно обновляет и анализирует полученные данные в режиме online
                        с помощью камер видеонаблюдения и навигационных систем, а нейронные сети выдают
                        Вам в приложении необходимую информацию.
                    </p>
                    <br />
                    <p>
                        К примеру:
                    </p>
                    <br />
                    <div>
                        “Помощник парковки”:
                        <p className={classes['list-item']}>
                            Находит место по габаритам вашей машины (транспортного средства)
                        </p>
                        <p className={classes['list-item']}>
                            Прогнозирует наличие свободных парковочных мест
                        </p>
                    </div>
                    <br />
                    <div>
                        “Постановка маршрута:
                        <p className={classes['list-item']}>
                            Осуществляет поиск свободного парковочного места и построение оптимального маршрута до него
                        </p>
                        <p className={classes['list-item']}>
                            Помогает найти свободный выезд из двора (комплекса) в час пик (сокращение придомового трафика).
                        </p>
                    </div>
                </div>
                <img src={DescriprionImg} alt="" />
            </div>
            <Footer />
        </div>
        <img className={classes['logo-bg-second']} src={LogoBG} alt="" />
    </main>
);

export default About;