import React from "react";
import {Firstname,Lastname} from './App';
const ComC = () => {
    return (
      <>
        <Firstname.Consumer>{(fname) =>{
            return(
                <Lastname.Consumer>{(lname) =>{
return (
  <>
  
    <h1>This is component C</h1>
    <h3>
      My name is {fname} {lname}
    </h3>
  </>
);
                }}</Lastname.Consumer>
            )
        }}</Firstname.Consumer>
      </>
    );
};
export default ComC;
