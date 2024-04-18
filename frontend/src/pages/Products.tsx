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
import FirstImg from '@/assets/1.jpg';
import SecondImg from '@/assets/2.jpg';
import ThirdImg from '@/assets/3.jpg';
import FourthImg from '@/assets/4.jpg';

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
                    <img src={SecondImg} alt="Second image of product" />
                    <img src={ThirdImg} alt="Third image of product" />
                    <img src={FourthImg} alt="Fourth image of product" />
                </div>
                <div className={classes['text-container']}>
                    <h1>
                        Устройство для проведения гемодиализа
                    </h1>
                    <p>
                        Изобретение относится устройствам для осуществления гемодиализа. Технической задачей изобретения, совпадающей с положительным результатом от его применения, является обеспечение возможности проведения с помощью устройства процедуры гемодиализа. Устройство содержит основную магистраль, включающую в себя артериальную и венозную линии, между которыми установлен диализатор. Артериальная линия включает в себя последовательно установленные и механически соединенные между собой входной коннектор пациента, зажим, первый коннектор инъекционный Т-образный, выход которого подключен к первому входу смесителя, ко второму входу которого подключена линия подачи антикоагулянта, при этом выход смесителя подключен к входному патрубку крестовины, выход которого подключен к входу насосного кольцевого сегмента ПВХ-трубки, выполненной с возможностью воздействия на нее роликов ротора перильстатического насоса, при этом выход трубки подключен к входу второго патрубка крестовины, выход которого соединен с входом второго коннектора инъекционного Т-образного, выход которого подключен к входному коннектору диализатора. Выходной коннектор диализатора подключен к входу венозной линии, включающей в себя последовательно установленные и механически соединенные между третий коннектор инъекционный Т-образный, выход которого подключен к входу Т-образного клапана, выход которого подключен к входу фильтра тромбов, снабженного четвертым коннектором инъекционным Т-образным и выходом датчика венозного давления, при этом выход фильтра через зажим, подключен к выходному коннектору пациента.
                    </p>
                </div>
            </div>
            <Footer ref={footer}/>
        </main>
    );
};

export default Products;