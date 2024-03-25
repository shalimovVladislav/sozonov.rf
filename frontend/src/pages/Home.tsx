import React from 'react';
import classes from './Home.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import cityImage from '@/assets/homePage_img.png';

const Home = () => (
    <>
        <main className={classes['home-bg']}>
            <Navbar />
            <div className={classes['flex-container']}>
                <div className={classes['text-container']}>
                    <h1 className={classes['color-white']}>Созонов.рф</h1>
                    <p className={classes['color-white']}>Программно-аппаратный комплекс мониторинга придомовых не регулируемых парковочных мест.</p>
                    <button className={classes['color-white']}>Узнать подробнее</button>
                </div>
                <div className={classes['img-container']}>
                    <img src={cityImage} alt="city skyscraper" />
                    <div className={classes['offset-border']}></div>
                </div>
            </div>
            <div className={classes['bg-car-parking']}>
                <div className={classes['flex-container-column']}>
                    <div className={classes['text-container']}>
                        <h1>Цените время</h1>
                        <p>Не трать время на поиск парковочного места!  Установи приложение!</p>
                    </div>
                    <button className={classes['color-white']}>Скачать сейчас</button>
                </div>
            </div>
        </main>
        <Footer />
    </>
);

export default Home;