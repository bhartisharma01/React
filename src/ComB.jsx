import React, { useContext } from "react";
import ComC from  './ComC';
import {Firstname,Lastname} from './App';
const ComB = () => {
  const Fname = useContext(Firstname);
  const Lname= useContext(Lastname);
    return (
      <>
        <h1>Data of component B</h1>
          <h3>My name is {Fname}  {Lname}</h3>
        <h3>Data of component C</h3>
        <ComC />
      </>
    );
};
export default ComB;
