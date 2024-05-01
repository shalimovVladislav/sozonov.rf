import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';
import { useAppSelector, useAppDispatch } from '@/hooks/index';
import { selectAuthentication, clearAuth } from '@/slices/authenticationReducer'

const darkBgPagesPaths = ['/home'];

const Navbar = () => {
  let location = useLocation();

  const path = location.pathname;

  const isBgDark = darkBgPagesPaths.includes(path);

  const navigate = useNavigate();
  const [displayType, setDistplayType] = useState('block');

  const isAuth = useAppSelector(selectAuthentication)
  const dispatch = useAppDispatch();

  const handleClickOnHelpBtn = () => {
    navigate('/feedback#form');
  };

  const handleClickOnContactsBtn = () => {
    navigate('.#footer', { relative: "path" });
  };

  const handleClickOnExitBtn = () => {
    dispatch(clearAuth());
  }

  return (
    <nav>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/home'}>Главная</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/about'}>О нас</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/products'}>Оплатить подписку</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/feedback'}>Отзывы</Link>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnHelpBtn} >Помощь</button>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnContactsBtn}>
        Контакты
      </button>
      {isAuth ? <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} onClick={handleClickOnExitBtn}>Выйти</button> : <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark} ${classes[`display-${displayType}`]}`} to={'/auth'}>Войти</Link>}
    </nav>
  );
};
  
export default Navbar;