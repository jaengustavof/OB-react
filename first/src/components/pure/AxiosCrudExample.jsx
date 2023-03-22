import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getAllPagedUsers, getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from '../../services/axiosCrudService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AxiosCrudExample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid email format').required('email is required'),
            password: Yup.string().required('Password is required')
        }
    );


    const authUser = (values) => {
        login(values.email, values.password)
            .then((response)=>{
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token)
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                    
                }
                
            })
            .catch((error)=>{
                sessionStorage.removeItem('token');
                alert(`Something went wrong ${error}`)
            })
            .finally(()=>{
                console.log('Logged in')
            })
    }

    // CRUD Examples

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error('No user found')
                }
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error(`No user found in page ${page}`)
                }
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response)=>{
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error('User Not Found')
                }
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201){
                    alert(JSON.stringify(response.data));
                }else{
                    throw new Error('User Not Created')
                }
                
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserById(id, name, job)
            .then((response)=>{
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data));
                }else{
                    throw new Error('User Not Found and Not updated')
                }
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

    const deleteUser = (id) => {
        deleteUserById(id)
            .then((response)=>{
                if(response.status === 204){
                    alert(`User width id ${id} deleted succesfully`);
                }else{
                    throw new Error('User Not Found and Not deleted')
                }
            })
            .catch((error)=> alert(`Something went wron: ${error}`))
    }

        


    return (
        <div>
        <h4>Login Formik</h4>
        <Formik
            initialValues={initialCredentials}
            validationSchema = {loginSchema}
            onSubmit={async (values) => {
                
                authUser(values)

            }}
        >

            {/* We obtain props from Formik */}

            {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                    <label htmlFor="email">Email (eve.holt@reqres.in)</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />
                    { /*Email Errors with ErrorMessage component */
                        errors.email && touched.email && (
                            <ErrorMessage name='email' component="div"></ErrorMessage> //Error message inside a div
                        )
                    }

                    <label htmlFor="password">Password (cityslicka)</label>
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

        {/* Example buttons to test API Responses */}
        <div>
            <button onClick={obtainAllUsers}>Get All Users</button>
            <button onClick={() => obtainAllPagedUsers(1)}>Get All Paged Users</button>
            <button onClick={() => obtainUserById(1)}>Get User 1</button>
            <button onClick={() => createNewUser('morpheus', 'leader')}>Create New User</button>
            <button onClick={() => updateUser(1,'morpheus', 'Developer')}>Update User</button>
            <button onClick={() => deleteUser(1)}>Delete User</button>
        </div>
    </div>
    );
}

export default AxiosCrudExample;
