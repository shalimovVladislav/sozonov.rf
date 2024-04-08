import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Products.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDiamondIcon from '@/assets/products_icon_diamond.png';
import ProductGoldIcon from '@/assets/products_icon_gold.png';
import ProductSilverIcon from '@/assets/products_icon_silver.png';
import ProductPlatinumIcon from '@/assets/products_icon_platinum.png';
import LogoBG from '@/assets/logo_bg.png';

const Products = () => {
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);
    
    return (
        <main className={classes['bg-white']}>
            <Navbar />
            <div className={classes.content}>
                <h1>
                    Продукты
                </h1>
                <div className={classes.products}>
                    <div className={classes.product}>
                        <img src={ProductDiamondIcon} alt="Diamond icon" />
                        <h2>
                            Diamond
                        </h2>
                        <p>
                            Подписка MAXIMUM
                        </p>
                    </div>
                    <div className={classes.product}>
                        <img src={ProductGoldIcon} alt="Gold icon" />
                        <h2>
                            Gold
                        </h2>
                        <p>
                            Индивидуальные предприниматели
                        </p>
                    </div>
                    <div className={classes.product}>
                        <img src={ProductSilverIcon} alt="Silver icon" />
                        <h2>
                            Silver
                        </h2>
                        <p>
                          Пробная версия
                        </p>
                    </div>
                    <div className={classes.product}>
                        <img src={ProductPlatinumIcon} alt="Platinum icon" />
                        <h2>
                            Platinum
                        </h2>
                        <p>
                            Коммерческие организации
                        </p>
                    </div>
                </div>
            </div>
            <Footer ref={footer}/>
        </main>
    );
};

export default Products;