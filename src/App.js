import React, { createContext, useEffect, useState } from 'react';
import ComA from './ComA';
const Firstname = createContext();
const Lastname =createContext();
const App =() =>{
  const [num,setNum]=useState(0);
   const [nums, setNums] = useState(0);
  useEffect(()=>{
    alert('I am clicked');
  },[num]);
   useEffect(()=>{
   document.title=`you clicked me ${nums} times`;
  },[nums]);
  return (
    <>
      <Firstname.Provider value={"Bharti "}>
        <Lastname.Provider value={" Sharma"}>
          <ComA />
        </Lastname.Provider>
      </Firstname.Provider>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click me {num}
      </button>
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click me {nums}
      </button>
    </>
  );

}
export default App;
export { Firstname, Lastname };