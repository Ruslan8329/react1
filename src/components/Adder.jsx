import React from "react";

const Adder = ({ num1, num2 }) => {
  const sum = num1 + num2;
  return (
    <div>
      <p>
        {num1} + {num2} = {sum}
      </p>
    </div>
  );
};

export default Adder;
