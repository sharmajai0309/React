import { useContext } from "react";
import TodoItem from "./Todoitem"; // Ensure consistent capitalization
import { TodoItemContext } from "./store/todo-iteam-store";

const TodoItems = () => {
  

  const contextobj =(useContext(TodoItemContext));
  const toddoIteam = contextobj.todoItems;
  const deleteitem = contextobj.deleteitem;
    return (

      <ul class="space-y-6 gap-3">
        {/* Map through todoItems dynamically */}
        {toddoIteam.map((item) => (
          <TodoItem
            key={item.id} // Ensure a unique key for each item
            item={item.name}
            ondeleteClick={deleteitem} // Pass the delete function to the TodoItem component as a prop
          />
        ))}
      </ul>


    );
  };
  
  export default TodoItems;