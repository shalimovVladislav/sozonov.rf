import React from 'react';
import classes from './FeedbackForm.module.scss';
import axios from 'axios';
import * as yup from 'yup';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';


interface Values {
    firstName: string;
    email: string;
    text: string;
}

const FeedbackForm = () => {
    

    return (
        <div className={classes['feedback-form']}>
            <Formik
                        initialValues={{
                            firstName: '',
                            email: '',
                            text: '',
                        }}
                        onSubmit={(
                            values: Values,
                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 500);
                        }}
                    >
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="Имя" />

                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" placeholder="E-mail" type="email"/>

                            <label htmlFor="text">Text</label>
                            <Field id="text" name="text" placeholder="Текст" type="text"/>

                            <button type="submit">Отправить</button>
                        </Form>
                    </Formik>
        </div>
    );
};

export default FeedbackForm;