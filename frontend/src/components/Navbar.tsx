import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';
import logo from '@/assets/logo.png';

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
  };

  return (
    <nav>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/home'}>Главная</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/about'}>О нас</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/products'}>Описание продукта</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/feedback'}>Отзывы</Link>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnHelpBtn} >Помощь</button>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnContactsBtn}>
        Контакты
      </button>
    </nav>
  );
};
  
export default Navbar;