import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 320px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  h1 {
    margin-bottom: 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  label {
    margin: 8px 0;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    outline: none;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #EA4F90;
    height: 48px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: background-color 0.4s;
  }
  button:hover {
    background: #000;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    margin-top:30px;
    transition: color 0.4s;
  }
  a:hover {
    color: #000;
  }
`;