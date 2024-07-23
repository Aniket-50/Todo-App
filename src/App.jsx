
import AppName from './Comp/AppName';
import AddTodo from './Comp/AddTodo';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoItems from './Comp/TodoItems';
import { useEffect, useReducer, useState } from 'react';
import TaskFinished from './Comp/TaskFinished';
import {TodoStore} from './store/TodoStore';


const todoItemsReducer=(CurrTodoItems,action)=>{
  let newTodoItem=CurrTodoItems;
  if(action.type=="NEW-ITEM"){
    newTodoItem=[...CurrTodoItems,{name:action.payload.todoItem,todoDate:action.payload.todoDate}]  
}
else if(action.type=="DEL-ITEM"){
  newTodoItem=CurrTodoItems.filter(item=>item.name!=action
    .payload.todoItem)
}
return newTodoItem;
}
function App() {
  const getLocal=()=>{
    let list=localStorage.getItem('lists')
    if(list){
      return JSON.parse(localStorage.getItem('lists'))
    }
    else{
      return [];
    }
  }
const [todoItems,dispatchTodoItem]=useReducer(todoItemsReducer,getLocal())
useEffect(()=>{
localStorage.setItem('lists',JSON.stringify(todoItems))
},[todoItems])
const addNewItem=(todoItem,todoDate)=>{
  const newItemAction={
    type:"NEW-ITEM",
    payload:{
      todoItem,
      todoDate
    }
  };
  dispatchTodoItem(newItemAction);
  
}

const DeleteItem=(todoItem)=>{
 
  const DelAction={
    type:"DEL-ITEM",
    payload:{
      todoItem
    }
  };
  dispatchTodoItem(DelAction);
}

//const [todoItems,setTodoItem]=useState(initialTodoItem);

  return (
    <>
    <TodoStore.Provider value={{todoItems,addNewItem,DeleteItem}}>
     <center className="todo-container">
      <AppName/>
      <div className="items-container">
      <AddTodo onNewItem={addNewItem}/>
      <TaskFinished/>
        <TodoItems todoItems={todoItems} onDelClick={DeleteItem}/>
      </div>
     </center>
     </TodoStore.Provider>

     
  
    </>
  )
}

export default App;
