import { FormEvent } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Need to be at least 2 characters')
            .max(15, 'Need to be less than 15 characters')
            .required('Required'),
          email: Yup.string()
            .email('Not a valid email address')
            .required('Required'),
          password1: Yup.string()
            .min(6, 'Need to be at least 6 characters')
            .required(),
          password2: Yup.string().oneOf(
            [Yup.ref('password1'), null],
            'Passwords must match'
          ),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput name='name' label='Name' placeholder='Igor Chinchay' />

            <MyTextInput
              name='email'
              type='email'
              label='Email'
              placeholder='igor2008_11@hotmail.com'
            />

            <MyTextInput name='password1' type='password' label='Password' />

            <MyTextInput
              name='password2'
              type='password'
              label='Confirm Password'
            />

            <button type='submit'>Register</button>

            <button type='button' onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
