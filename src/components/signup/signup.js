import React from 'react';
import { useFormik, FormikProvider, Form } from 'formik';
import Input from '../input/input';
import './signup.css'
import * as Yup from 'yup';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await sleep(2000);
      props.Authenticate(values);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Must be at least 4 characters')
        .max(20, 'Must be less  than 20 characters')
        .required('Username is required')
        .matches(
          /^[a-zA-Z0-9]+$/,
          'Cannot contain special characters or spaces'
        ),
      email: Yup.string().email().required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Password is required'),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form className="SignupForm">
        <Input
          label="Username"
          id="username"
          name="username"
          helpText="Must be 4-20 characters and cannot contain special characters."
          type="text"
        />
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
          <button type="submit">Sign-up</button>
          <button type="reset">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
};


export default Login;