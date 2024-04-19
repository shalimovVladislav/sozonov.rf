import React, { forwardRef, ForwardedRef } from 'react';
import classes from './Footer.module.scss';
import VKIcon from '@/assets/free-icon-font-vk-6422212.png';
import TelegramIcon from '@/assets/free-icon-font-telegram-6422206.png';
import YoutubeIcon from '@/assets/free-icon-font-youtube-6422215.png';

const Footer = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classes.footer} ref={ref}>
      <div className={classes['flex-container-column']}>
        <div className={classes['text-container']}>
          <h1>Наши контакты</h1>
          <div className={classes.bold}>
            <p>
              +7 (987) 413-47-57
            </p>
            <p>ayrat.abdullin@mail.ru</p>
          </div>
        </div>
        <div className={classes['text-container']}>
          <h2>Мы в социальных сетях:</h2>
          <div className={classes.icons}>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <img src={VKIcon} alt="" />
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <img src={TelegramIcon} alt="" />
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
  
export default Footer;