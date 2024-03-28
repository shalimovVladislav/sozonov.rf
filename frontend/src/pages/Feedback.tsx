import React, { useRef } from 'react';
import classes from './Feedback.module.scss';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import RewiewImg1 from '@/assets/review_img1.png';
import RewiewImg2 from '@/assets/review_img2.jpg';
import RewiewImg3 from '@/assets/review_img3.jpg';
import RewiewImg4 from '@/assets/review_img4.jpeg';

const Feedback = () => {
    const feedbackForm = useRef<HTMLDivElement | null>(null);

    return(
        <>
        <main>
            <Navbar feedbackForm={feedbackForm}/>
            <div className={classes['feedback-bg']}>
                <div className={classes['text-container']}>
                    <h1>
                        Открывай возможности вместе с нами
                    </h1>
                    <div className={classes.line}></div>
                    <p>
                        <b>Созонов.рф</b> это не только приложение, а возможность для каждого пользователя взаимодействовать с передовыми технологиями в сфере транспортной телематики и GPS навигации.
                    </p>
                </div>
            </div>
            <div className={classes['reviews-container']}>
                <h1>
                    Отзывы наших клиентов
                </h1>
                <div className={classes.reviews}>
                    <div className={classes.review}>
                        <img src={RewiewImg1} alt="Image of the user who left the review" />
                        <p>
                            Очень простое в использовании приложение, никаких лишних функций, всё легко и понятно.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg2} alt="Image of the user who left the review" />
                        <p>
                            Никогда не думал, что обычное приложение на телефоне настолько сильно облегчит мою жизнь. Спасибо разработчикам.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg3} alt="Image of the user who left the review" />
                        <p>
                            Очень простое в использовании приложение, никаких лишних функций, всё легко и понятно.
                        </p>
                    </div>
                    <div className={classes.review}>
                        <img src={RewiewImg4} alt="Image of the user who left the review" />
                        <p>
                            Никогда не думала, что обычное приложение на телефоне настолько сильно облегчит мою жизнь. Спасибо разработчикам.
                        </p>
                    </div>

                </div>
            </div>
            <div className={classes['form-bg']} ref={feedbackForm}>
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
        <Footer />
    </>
    )
};

export default Feedback;