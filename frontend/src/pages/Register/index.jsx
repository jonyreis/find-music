import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"

import api from "../../services/api"

import { Form, Container } from "./styles"


class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  }

  handleSignUp = async e => {
    e.preventDefault()
    const { username, email, password } = this.state
    if (!username || !email || !password) {
        this.setState({ error: "Preencha todos os dados para se cadastrar" })
    } else {
        try {
            await api.post("/register", { username, email, password })
            this.props.history.push("/")
        } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta." })
        }
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <h1>Find Music</h1>
          {this.state.error && <p>{this.state.error}</p>}
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="senha">senha</label>
          <input
            type="password"
            placeholder="Digite uma Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Registre-se</button>
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    )
  }
}

export default  withRouter(Register)
