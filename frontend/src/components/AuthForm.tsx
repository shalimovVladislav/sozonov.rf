import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import axios from 'axios';
import classes from './AuthForm.module.scss';
import { useAppDispatch } from '@/hooks/index';
import type { AppDispatch } from '@/slices/index';
import { setAuth } from '@/slices/authenticationReducer'


interface FormValues {
  email: string;
  password: string;
}
  
interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="email" name="email" placeholder="Email" autoComplete="email"/>
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" placeholder="Пароль" autoComplete="current-password"/>
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Войти
      </button>
    </Form>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string;
  dispatch: AppDispatch;
  navigate: NavigateFunction;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: '',
    };
  },

  validate: (values: FormValues) => {
    
  },

  handleSubmit: (values, formikBag) => {
    const { dispatch, navigate } = formikBag.props;
    dispatch(setAuth());
    navigate('/home');
  },
})(InnerForm);

const AuthForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={classes['auth-form']}>
      <MyForm message="Авторизируйтесь" dispatch={dispatch} navigate={navigate}/>
  </div>
  );
};

export default AuthForm;