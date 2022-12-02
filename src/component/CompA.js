import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../redux/userDetails/userActions";

function CompA() {
  const object = {
    name: "Pawan Singh",
    age: 27,
    email: "pawansingh1910@gmail.com",
    address: "78/79 Btm Layout Bangalore -560076",
  };

  const dispatch = useDispatch();

  const [name, setName] = useState("Pawan");

  const click = () => {
    dispatch(userAction(object));
  };

  return (
    <div>
      <h1> My name is {name}</h1>
      <button onClick={click}>Click here</button>
    </div>
  );
}

export default CompA;
