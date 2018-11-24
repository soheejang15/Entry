import React, { Component } from 'react';
import './TodoItem.css'
import Delete from './delete.png'

class TodoItem extends Component {
  render() { 
    const { listIndex, todo, isDelete } = this.props;
    return ( 
      <div className="item-container">
        <p className="todo-text"> {`${listIndex+1}. ${todo}`} </p>
        <img className="img-delete" src={Delete} alt=" " onClick={() => isDelete(listIndex)}></img>
      </div>
     );
  }
}
 
export default TodoItem;