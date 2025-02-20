import "./App.css";
import AddTodo from "./Component/AddTodo";
import Appname from "./Component/Appname";

import TodoItems from "./Component/TodoItems";
import Container from "./Component/Container";
import {  useReducer } from "react";
import Welcomemsg from "./Component/Welcomemsg";
import TodoItemsContextprovider from "./Component/store/todo-iteam-store";





function App() {
  

  return (
    <TodoItemsContextprovider>
    
    <center>
      <Container>
        <center className="todo-container bg-slate-800 ">
          <div className="max-w-md mx-auto  p-6 bg-white shadow-lg rounded-lg px-14 pb-6 ">
            <Appname />
            <AddTodo />
            
            <TodoItems  />

            <Welcomemsg ></Welcomemsg>
          </div>
        </center>
      </Container>
      <Container>
        <p className="text-white text-center py-8">
          Above Food are the Healthy Foods
        </p>
      </Container>
      </center>
      </TodoItemsContextprovider>
  );
}

export default App;

