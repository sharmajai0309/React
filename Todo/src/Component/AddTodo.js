import { useContext, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemContext } from "./store/todo-iteam-store";



function AddTodo() {

  const contextobj =useContext(TodoItemContext);
  const addnewIteam = contextobj.addnewIteam
  const [input, setLetter] = useState("");
   
  const handleName = (event) => {
    setLetter(event.target.value);
  }
  const handleNamechange =(event) =>{
    // console.log(event);
    event.preventDefault();

    addnewIteam(input);
    setLetter("");

  }
  return (
    <form onSubmit={handleNamechange}>

     
      <div class="flex items-center mb-4">
      <input
        type= "text"
        placeholder="Enter Here"
        aria-label="Enter Todo"
        class="w-full p-2 rounded-md text-gray-800"
        onChange={handleName}
        value = {input}
      />
        
        <button
        type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 on"
          

        >
          <IoAddCircleOutline />
        </button>
      </div>

    </form>


  );
}
export default AddTodo; 