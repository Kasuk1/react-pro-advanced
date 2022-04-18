import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Should have 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Should have 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Not a valid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf(
            [true],
            'Should accept the terms and conditions'
          ),
          jobType: Yup.string()
            .notOneOf(['it-senior'], 'This option is not allowed')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='Igor'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Chinchay'
            />

            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='igor@hotmail.com'
              type='email'
            />

            <MySelect label='Job Type' name='jobType'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
            </MySelect>

            <MyCheckbox label='Terms and Conditions' name='terms'></MyCheckbox>

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
