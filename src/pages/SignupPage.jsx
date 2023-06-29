import React, { useState, useEffect } from "react"
import axios from "axios"
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from 'yup'
import { Link, useNavigate } from "react-router-dom"

const SignupPage = () => {

    const navigate = useNavigate()
    const initialValues = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }

    const validationSchema = Yup.object({
        firstName : Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().required('Email is required').email('Email must be in valid format'),
        password: Yup.string().required('Password is required').min(6, 'Password must be atleast 6 Char'),
        confirmPassword: Yup.string().required('Password is required')
                            .min(6, 'Password must be atleast 6 Char')
                            .oneOf([Yup.ref('password'), null], 'Password must be same')
    })

    const onSubmit = () => {
        navigate('/login')
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h1
                         className="text-center"
                         style={{fontSize:'60px', fontWeight: '100'}}
                         >Sign Up</h1>
                        <br />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount= {true}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                className={
                                                    formik.errors.firstName && formik.touched.firstName ? 
                                                    "form-control is-invalid" : "form-control"
                                                }
                                            />
                                            <ErrorMessage name="firstName">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className={
                                                    formik.errors.lastName && formik.touched.lastName ? 
                                                    "form-control is-invalid" : "form-control"
                                                }
                                            />
                                            <ErrorMessage name="lastName">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="email"
                                                placeholder="Email Address"
                                                className={
                                                    formik.errors.email && formik.touched.email ? 
                                                    "form-control is-invalid" : "form-control"
                                                }
                                            />
                                            <ErrorMessage name="email">
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
                                                className={
                                                    formik.errors.password && formik.touched.password ? 
                                                    "form-control is-invalid" : "form-control"
                                                }
                                            />
                                            <ErrorMessage name="password">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                className={
                                                    formik.errors.confirmPassword && formik.touched.confirmPassword ? 
                                                    "form-control is-invalid" : "form-control"
                                                }
                                            />
                                            <ErrorMessage name="confirmPassword">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <p className="text-center">
                                            Already have an account? Login <Link to={'/login'}>here.</Link>
                                        </p>

                                        <input
                                         type="submit" 
                                         value="Sign Up" 
                                         className="btn-primary btn-block"
                                         style={{height: '40px', fontSize:'20px', fontWeight: '700', borderRadius:'5px'}}
                                         disabled={!formik.isValid}
                                        />
                                       
                                    </Form>
                                    
                                )
                            }}
                                 
                        </Formik>
                        
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default SignupPage