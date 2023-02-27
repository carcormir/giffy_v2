import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "hooks/useUser";
import registerService from "services/register";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./Register.css";

const validateFields = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required username";
  }
  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length < 3) {
    errors.password = "Password length must be larger than 3";
  }
  return errors;
}

const initialValues = {
  username: "",
  password: "",
}

export default function Register() {
  const [registered, setRegistered] = useState(false);
  if (registered) 
    return <h4>Congratulations ✅ you have been successfully registered!</h4>
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return registerService(values)
          .then(() => {
            setRegistered(true)
          })
          .catch(() => {
            setFieldError("username", "This username is not valid");
          });
        }}
      >
        {/* {({ errors, handleSubmit, handleChange, isSubmitting }) => (
          <form
            className="form"
            onChange={handleChange}
            onSubmit={handleSubmit}
          >
            <input
              className={errors.username ? 'error' : ''}
              name="username"
              placeholder="username"
              onChange={handleChange}
            ></input>
            {errors.username && (
              <small className="form-error">{errors.username}</small>
            )}
            <input
              className={errors.password ? 'error' : ''}
              name="password"
              placeholder="password"
              onChange={handleChange}
            ></input>
            {errors.password && (
              <small className="form-error">{errors.password}</small>
            )}
            <button className="btn" disabled={isSubmitting}>
              Register
            </button>
          </form>
        )} */}

        {({ errors, isSubmitting }) => (
          <Form
            className="form"
          >
            <Field
              className={errors.username ? 'error' : ''}
              name="username"
              placeholder="username"
            ></Field>
            <ErrorMessage className="form-error" name="username" component='small'/>
            <Field
              className={errors.password ? 'error' : ''}
              name="password"
              placeholder="password"
              type="password"
            ></Field>
            <ErrorMessage className="form-error" name="password" component='small'/>
            <button className="btn" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
