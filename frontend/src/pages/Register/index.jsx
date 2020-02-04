import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import api from '../../services/api'

import '../Login/styles.css'


export default function Register({ history }) {

    const handleSubmit = values => {
        api.post('/register', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/')
                }
            })
    }

    const validations = yup.object().shape({
        username: yup.string().required(),
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
                    <strong>Registre-se</strong>
                    <div className="login-group">
                        <label>Username</label>
                        <Field
                            name="username"
                            placeholder="Digite um username..."
                            className="login-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="username"
                            className="login-error"
                        />
                    </div>
                    <div className="login-group">
                        <label>E-mail</label>
                        <Field
                            name="email"
                            placeholder="Digite seu melhor e-mail..."
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
                            placeholder="Digite uma senha..."
                            className="login-field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="login-error"
                        />
                    </div>
                    <a href="/">Login</a>
                    <button className="login-Btn" type="submit">Registrar</button>
                </Form>
            </Formik>
        </>
    )
}
