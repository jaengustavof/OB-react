import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('email is required'),
        password: Yup.string().required('Password is required')
    }
);


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const history = useNavigate();

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema = {loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //We save the data in the localstorage
                    await localStorage.setItem('credentials', values);
                    history('/profile');
                }}
            >

                {/* We obtain props from Formik */}

                {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />
                        { /*Email Errors with ErrorMessage component */
                            errors.email && touched.email && (
                                <ErrorMessage name='email' component="div"></ErrorMessage> //Error message inside a div
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="password" type="password" />
                        { /*Password Errors without ErrorMessage component*/
                            errors.password && touched.password && (
                                <div className='error'>
                                    <p>{errors.password}</p>
                                </div>
                            )
                        }

                        <button type="submit">Submit</button>

                        {isSubmitting? (<p>Login your credentials...</p>) : null}
                    </Form>   

                )}  
            </Formik>
        </div>

    );
}

export default LoginFormik;
