import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Feedback.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import RewiewImg1 from '@/assets/review_img1.png';
import RewiewImg2 from '@/assets/review_img2.jpg';
import RewiewImg3 from '@/assets/review_img3.jpg';
import RewiewImg4 from '@/assets/review_img4.jpeg';

const Feedback = () => {
    const form = useRef<HTMLDivElement>();
    const footer = useRef<HTMLDivElement>();
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#form" && form.current) {
            form.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#footer" && footer.current) {
            footer.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return(
        <>
        <main>
            <Navbar/>
            <div className={classes['reviews-container']}>
                <h1>
                    Отзывы наших клиентов
                </h1>
                <div className={classes.reviews}>
                    <div className={classes.review}>
                        <img src={RewiewImg1} alt="Image of the user who left the review" />
                        <p>
                            Высокое качество продукции и надежность в использовании. Рекомендую этого поставщика.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg2} alt="Image of the user who left the review" />
                        <p>
                            Оперативная обработка заказа и быстрая доставка, что очень важно для нашей практики.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg3} alt="Image of the user who left the review" />
                        <p>
                            Компетентный и внимательный персонал, готовый оперативно ответить на все вопросы.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg4} alt="Image of the user who left the review" />
                        <p>
                        Приемлемые цены на комплекты, что 
делает их доступными для 
медучреждений.
                        </p>
                    </div>

                </div>
            </div>
            <div className={classes['form-bg']} ref={form}>
                <div className={classes['feedback-form-container']}>
                    <div className={classes['text-container']}>
                        <h1>
                            Обратная связь
                        </h1>
                        <p>
                            В целях оперативного рассмотрения ваших обращений просим максимально точно изложить суть вопроса и имеющиеся факты.
                        </p>
                    </div>
                    <FeedbackForm/>
                </div>
            </div>
        </main>
        <Footer ref={footer}/>
    </>
    )
};

export default Feedback;