import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';
import Logo from '@/assets/logo.svg';

const darkBgPagesPaths = ['/home', '/feedback'];

const Navbar = () => {
  let location = useLocation();

  const path = location.pathname;

  const isBgDark = darkBgPagesPaths.includes(path);

  const navigate = useNavigate();
  const [displayType, setDistplayType] = useState('block');

  const handleClickOnLogoBtn = () => {
    if (displayType == 'none') {
      setDistplayType('block');
    }
    if (displayType == 'block') {
      setDistplayType('none');
    }
  };

  const handleClickOnHelpBtn = () => {
    navigate('/feedback#form');
  };

  const handleClickOnContactsBtn = () => {
    navigate('.#footer', { relative: "path" });
    // const footer = document.getElementById('footer');
    // footer.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <nav>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/home'}>Главная</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/about'}>О нас</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/products'}>Оплатить подписку</Link>
      <button className={classes.logo} onClick={handleClickOnLogoBtn}>
        <Logo className={`${isBgDark ? classes.light : classes.dark}`} width={142} height={142}></Logo>
      </button>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/feedback'}>Отзывы</Link>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnHelpBtn} >Помощь</button>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnContactsBtn}>
        Контакты
      </button>
    </nav>
  );
};
  
export default Navbar;