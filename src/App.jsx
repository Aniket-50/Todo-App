import AddTodo from './Comp/AddTodo';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import TodoItems from './Comp/TodoItems';
import {useEffect, useReducer} from 'react';
import {TodoStore} from './store/TodoStore';


const todoItemsReducer=(CurrTodoItems,action)=>{
  let newTodoItem=CurrTodoItems;
  if(action.type=="NEW-ITEM"){
    newTodoItem=[...CurrTodoItems,{id:action.payload.id,checked:action.payload.checked, name:action.payload.todoItem,todoDate:action.payload.todoDate}]  
}
else if(action.type=="DEL-ITEM"){
  newTodoItem=CurrTodoItems.filter(item=>item.id!=action
    .payload.id)
}
else if(action.type=="edit"){
  newTodoItem=CurrTodoItems.map(item=>
    {if(item.name==action
    .payload.oldItem){
      return {id:action.payload.id,checked:action.payload.checked, name:action.payload.newitem,todoDate:action.payload.todoDate}
    }
  else {
    return item;
  }})
}
else if(action.type=="Done"){
  newTodoItem=CurrTodoItems.map(item=>
    {if(item.name==action
    .payload.todoItem){
      return {id:action.payload.id,checked:action.payload.checked, name:action.payload.todoItem,todoDate:action.payload.date}
    }
  else {
    return item;
  }})
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
      id:todoItems.length+1,
      checked:false,
      todoItem,
      todoDate
    }
  };
  dispatchTodoItem(newItemAction); 
}
const DeleteItem=(id)=>{
  const DelAction={
    type:"DEL-ITEM",
    payload:{
      id
    }
  };
  dispatchTodoItem(DelAction);
}
const editItem=(newitem,oldItem,todoDate,id,checked)=>{
  const editAction={
    type:"edit",
    payload:{
      id,
      newitem,
      checked,
      oldItem,
      todoDate
    }

  };
  dispatchTodoItem(editAction)
}
const doneItems=(checked,todoItem,date,id)=>{
  const DoneAction={
    type:"Done",
    payload:{
      checked,
      todoItem,
      date,
      id
    }
  };
  dispatchTodoItem(DoneAction)
}
//console.log(todoItems)

  return (
    <>
    <TodoStore.Provider value={{todoItems,editItem,doneItems,addNewItem,DeleteItem}}>
     <center className="todo-container">
     <h1> Todo App</h1>
      <div className="items-container">
      <AddTodo onNewItem={addNewItem}/>
      {todoItems.length==0 && <h1> All task Finshed</h1>}
        <TodoItems todoItems={todoItems} onDelClick={DeleteItem}/>
      </div>
     </center>
     </TodoStore.Provider>
    </>
  )
}

export default App;
