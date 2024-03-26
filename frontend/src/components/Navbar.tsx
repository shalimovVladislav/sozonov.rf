import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.scss';
import Logo from '@/assets/logo.svg';

const darkBgPagesPaths = ['/home', '/feedback'];

const Navbar = () => {
  let location = useLocation();

  const path = location.pathname;

  const isBgDark = darkBgPagesPaths.includes(path);

  return (
    <nav>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/home'}>Главная</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/about'}>О нас</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/products'}>Оплатить подписку</Link>
      <Logo className={`${isBgDark ? classes.light : classes.dark} ${classes.logo}`} width={142} height={142}></Logo>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/feedback'}>Отзывы</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/feedback'}>Помощь</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'#footer'}>Контакты</Link>
    </nav>
  );
};
  
export default Navbar;