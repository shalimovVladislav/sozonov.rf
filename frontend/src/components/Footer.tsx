import React, { createRef } from 'react';
import classes from './Footer.module.scss';
import VKIcon from '@/assets/vk_icon.png';
import TelegramIcon from '@/assets/telegram_icon.png';
import YoutubeIcon from '@/assets/youtube_icon.png';

const Footer = () => {
  return (
    <div className={classes.footer} id='footer'>
      <div className={classes['flex-container-column']}>
        <div className={classes['text-container']}>
          <h1>Наши контакты</h1>
          <div className={classes.bold}>
            <p>+7 (912) 015-40-24</p>
            <p>sayleksjam@mail.ru</p>
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
};
  
export default Footer;