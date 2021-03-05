// import { useRef, useEffect } from "react";
import { login } from "../../redux/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { isPending, isError, isNetworkEstablished } = useSelector(
    ({ auth }) => ({
      isPending: auth.isPending,
      isError: auth.isError,
      isNetworkEstablished: auth.isNetworkEstablished,
    })
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>My Form</h1>
      {!isNetworkEstablished && <p>Something Went Wrong</p>}
      <Formik
        initialValues={{ email: "hamadpervaiz@bearplex.com", password: "1234" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Required"),
          password: Yup.string()
            .required("Required")
            .matches(/^[\w]+$/g)
            .min(4)
            .max(16),
        })}
        onSubmit={(values, actions) => {
          const { email, password } = values;
          dispatch(login({ email, password }));
        }}
      >
        {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
            />
            <br />
            <br />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            <Field
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
            />
            <ErrorMessage
              name="password"
              component="p"
              style={{ color: "red" }}
            />
            <br />
            <br />
            {!isPending ? (
              <button type="submit">Submit</button>
            ) : (
              <button type="button" disabled={true}>
                Submitting
              </button>
            )}
          </form>
        )}
      </Formik>
      {isPending && <p>Loading...</p>}
      {isError && isNetworkEstablished && <p>Wrong Credentials...</p>}
    </div>
  );
};
export default Login;
