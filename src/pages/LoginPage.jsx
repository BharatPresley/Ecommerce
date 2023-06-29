import React, { useState, useEffect} from "react";
import axios from "axios";
import * as Yup from 'yup'
import { Formik, Form, Field, formik, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = () => {
    const navigate = useNavigate()

    const [requestedResponse, setRequestedResponse] = useState({
        textMessage: "",
        alertClass: ""
    })

    const initialValues = {
        username : '',
        password : ''
    }

    const onSubmit = (values) => {
        
        axios.post('https://fakestoreapi.com/auth/login', values)
            .then((response) => {
                setRequestedResponse({
                    textMessage: 'Login successful. Thank you.',
                    alertClass: 'alet alert-success'
                })

                localStorage.setItem('token', response.data.token)
                navigate('/')
            },
             (error) => {
                setRequestedResponse({
                    textMessage: error.response.data,
                    alertClass: 'alet alert-danger'
                })
             })
            .catch((error) => console.log(error))
    }
       
        
            
           
    

    const validationSchema = Yup.object({
        username: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be atleast 6 Char')
    })



    return(
        <div className="container">
            <div className="row">                
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="wrapper">
                        <div className={requestedResponse.alertClass} role="alert">
                            {requestedResponse.textMessage}   
                        </div> 
                        <h1
                         className="text-center"
                         style={{fontSize:'60px', fontWeight: '100'}}
                        >Login</h1>
                        <br />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                        >
                            {(formik) => {
                                return(
                                    <Form>
                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder="User Name"
                                                className={formik.errors.email && formik.touched.email ?
                                                    'form-control is-invalid' 
                                                    : 'form-control'}
                                            />
                                            <ErrorMessage name='email'>
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className={formik.errors.password && formik.touched.password ?
                                                    'form-control is-invalid' 
                                                    : 'form-control'}
                                            />
                                            <ErrorMessage name='password'>
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <p className="text-center">
                                            Don't have an account. Sign up <Link to={'/signup'}>here.</Link>
                                        </p>

                                        <input
                                         type="submit" 
                                         value="Login" 
                                         className="btn-primary btn-block" 
                                         disabled={!formik.isValid}
                                         style={{height: '40px', fontSize:'20px', fontWeight: '700', borderRadius:'5px'}}
                                        />
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                    <div className="col-md-3" />
                </div>       
            </div>
        </div>
    )
}

export default LoginPage