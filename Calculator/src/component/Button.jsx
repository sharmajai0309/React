function Button({ onButtonCLick }) {
    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", "C", "="];
  
    return (
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <button
            key={index} // Ensure each button has a unique key
            className="p-2 bg-gray-800 text-white rounded-md"
            onClick={() => onButtonCLick(button)} // Pass the button value on click
          >
            {button}
          </button>
        ))}
      </div>
    );
  }
  
  export default Button;
  