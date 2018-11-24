import React, { Component } from 'react';
import './RegisterTodo.css'

class RegisterTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <div className="register-container">
          <input className="text-register-todo"type="text" placeholder="새로운 To-Do를 입력하세요." ></input>
          <input className="btn-register" type="button" value="등록"></input>
        </div>
     );
  }
}
export default RegisterTodo ;