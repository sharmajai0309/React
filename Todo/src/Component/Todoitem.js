import { MdDeleteForever } from "react-icons/md";


function Todoitem({ item, ondeleteClick }) {
  

  return (
    <li className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
      <span className="item text-gray-800">{item}</span>

      <button
        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        onClick={() => ondeleteClick(item)}

      >
       <MdDeleteForever />
       
      </button>
    </li>
  );
}

export default Todoitem;
