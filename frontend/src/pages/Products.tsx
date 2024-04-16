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
import FirstImg from '@/assets/product_img1.jpg';
import SecondImg from '@/assets/product_img2.jpg';
import ThirdImg from '@/assets/product_img3.jpg';

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
                <div className={classes['img-container']}>
                    <img src={FirstImg} alt="First image of product" />
                    <img src={SecondImg} alt="Second image of product" />
                    <img src={ThirdImg} alt="Third image of product" />
                </div>
                <div className={classes['text-container']}>
                    <h1>
                        Насосная штанга
                    </h1>
                    <p>
                        Изобретение относится к нефтепромысловому оборудованию, а именно к конструкции стеклопластиковых насосных штанг. Положительным техническим результатом изобретения является повышенная надежность соединения стержня и металлических головок (ниппелей).
                    </p>
                    <br/>
                    <p>
                    В концевых частях стержня на его внешней поверхности выполнены спиралевидные канавки и закрытые пазы, равномерно распределенные по диаметру стержня. Металлические головки (ниппели) состоят из цилиндрического основания, хвостовика, лысок, ограничительного буртика и резьбовой части. В корпусе каждой из головок выполнено внутреннее продольное глухое цилиндрическое отверстие, при этом в области цилиндрического основания выполнены внутренние конусы, основанием направленные в сторону резьбовой части, заполненные клеящим составом.
                    </p>
                </div>
            </div>
            <Footer ref={footer}/>
        </main>
    );
};

export default Products;