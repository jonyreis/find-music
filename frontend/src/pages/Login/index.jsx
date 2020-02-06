import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import api from "../../services/api"
import { login } from "../../services/auth"

import { Form, Container } from "./styles"

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  }

  handleSignIn = async e => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" })
    } else {
      try {
        const response = await api.post("/", { email, password })
        login(response.data.token)
        this.props.history.push("/home")
      } catch (err) {
        this.setState({
          error:
            "Erro"
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <h1>Find Music</h1>
          {this.state.error && <p>{this.state.error}</p>}
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Login</button>
          <Link to="/register">Registre-se</Link>
        </Form>
      </Container>
    )
  }
}

export default withRouter(Login)
