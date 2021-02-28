import React from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import Input from '../input/input';
import './login.css'
import * as Yup from 'yup';

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      // await sleep(500);
      props.Authenticate(values);
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Password is required'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form className="LoginForm">
        <Input
          label="Email"
          id="email"
          name="email"
          helpText="Please enter a valid email."
          type="email"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          helpText="Must be min 8 characters and can contain special characters."
          type="password"
        />
        <div>
          <button type="submit">Log-in</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
};
  
export default Login;