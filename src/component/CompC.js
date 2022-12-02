import React from "react";
import { useSelector } from "react-redux";

function CompC() {
  const componentA_DATA = useSelector(state => state.userDetails);

  console.log("User Details from Component A", componentA_DATA);
  return (
    <div>
      <p>How are you?</p>
      {componentA_DATA.name}
    </div>
  );
}

export default CompC;
