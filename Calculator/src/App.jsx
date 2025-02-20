
import Display from "./component/display";
import Button from "./component/Button";
import { useState } from "react";

function App() {
  const [calVAl, setCalVAl] = useState("");

  const onButtonCLick = (button) =>{
    if(button === "C"){
      setCalVAl("");

    }
    else if(button === "="){
      const result = eval(calVAl);
      setCalVAl(result);

    }
    else{
      const newdisplay = calVAl + button;
      setCalVAl(newdisplay);
    } 
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="border bg-slate-500 p-4 rounded-md">
        <Display displayValue={calVAl}></Display>
        <Button onButtonCLick={onButtonCLick}></Button>
      </div>
    </div>
  );
}

export default App;
