import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import api from '../../services/api'

import './styles.css'

export default function Login({ history }) {

    const handleSubmit = values => {
        api.post('/authenticate', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('token', data)
                    history.push('/home')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })
    return (
        <>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="login">
                    <strong>Login</strong>
                    <div className="login-group">
                        <label>E-mail</label>
                        <Field
                            name="email"
                            placeholder="Digite seu e-mail..."
                            className="login-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="login-error"
                        />
                    </div>
                    <div className="login-group">
                        <label>Senha</label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Digite sua senha..."
                            className="login-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="login-error"
                        />
                    </div>

                    <a href="/register">Registre-se</a>
                    <button className="btn" type="submit">Login</button>
                </Form>
            </Formik>
        </>
    )
}
