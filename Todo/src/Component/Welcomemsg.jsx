import { useContext } from "react";
import { TodoItemContext } from "./store/todo-iteam-store";

const  Welcomemsg = () => {
    const contextobj =(useContext(TodoItemContext));
  const toddoIteam = contextobj.todoItems;


    return(
        
        toddoIteam.length === 0 && <h1>Enter Your TOdo</h1>
        
        

    )
 }
 export default Welcomemsg;