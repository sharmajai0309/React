import { createContext, useReducer } from "react";

export const TodoItemContext = createContext([]);
const todoItemsreducer =(currentitem,action)=> {
    let newTodoItem = currentitem
  
    if (action.type === "ADD_ITEM") {
        if(action.payload.itemName === ""){
            alert("Please Enter a valid Item");
            return currentitem;
        }
      newTodoItem = [...currentitem, { name: action.payload.itemName }];
      return newTodoItem;
    }
    
    else if(action.type === "REMOVE_ITEM"){
       newTodoItem = currentitem.filter(item => item.name !== action.payload.itemName);
      return newTodoItem;
    }
  
    return newTodoItem;
    }


const TodoItemsContextprovider = ({ children }) => {

    // const [todoItems, settodoItems] = useState([]);

    const [todoItems, settodoItems] = useReducer(todoItemsreducer, []);
    const addnewIteam = (itemName) => {
        const NewItemAction = {
            type: "ADD_ITEM",
            payload: {
                itemName
            }
        }
        settodoItems(NewItemAction);
    }



    const deleteitem = (itemName) => {
        // const newTodoItem = todoItems.filter(item => item.name !== itemName);
        // settodoItems(newTodoItem);

        const DeleteAction = {
            type: "REMOVE_ITEM",
            payload: {
                itemName
            }
        }
        settodoItems(DeleteAction);


    };


    
    return (
        <TodoItemContext.Provider value={{ todoItems: todoItems, addnewIteam: addnewIteam, deleteitem: deleteitem }}>
           {children}
        </TodoItemContext.Provider>
    )
}

export default TodoItemsContextprovider;