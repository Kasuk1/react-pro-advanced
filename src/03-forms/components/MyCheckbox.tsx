import { ErrorMessage, useField } from 'formik';

interface IMyCheckbox {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...props }: IMyCheckbox) => {
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component='span' />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};
