const Display = ({displayValue}) => {


    return (<input 
        type="text" 
        className="w-48 p-2 text-right text-lg border border-gray-300 rounded-md mb-4"
        value={displayValue}
        readOnly
      />)
}
export default Display;