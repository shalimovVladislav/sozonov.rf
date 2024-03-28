import React, { MutableRefObject} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classes from './Navbar.module.scss';
import Logo from '@/assets/logo.svg';

const darkBgPagesPaths = ['/home', '/feedback'];

const Navbar = ({ feedbackForm }: { feedbackForm?: MutableRefObject<HTMLDivElement> }) => {
  let location = useLocation();

  const path = location.pathname;

  const isBgDark = darkBgPagesPaths.includes(path);

  const navigate = useNavigate();

  const handleClickOnHelpBtn = () => {
    navigate('/feedback');
    feedbackForm.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/home'}>Главная</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/about'}>О нас</Link>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/products'}>Оплатить подписку</Link>
      <Logo className={`${isBgDark ? classes.light : classes.dark} ${classes.logo}`} width={142} height={142}></Logo>
      <Link className={`${classes.link} ${isBgDark ? classes.light : classes.dark}`} to={'/feedback'}>Отзывы</Link>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark}`} onClick={handleClickOnHelpBtn} >Помощь</button>
      <button className={`${classes.button} ${isBgDark ? classes.light : classes.dark}`} onClick={() => {
        const footer = document.getElementById('footer');
        footer.scrollIntoView({
          behavior: 'smooth'
        })
      }}>
        Контакты
      </button>
    </nav>
  );
};
  
export default Navbar;