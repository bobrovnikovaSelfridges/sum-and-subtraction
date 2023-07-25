import React, { useState } from "react";
import styled from "styled-components";

const CalculatorContainer = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 10px;
`;

const CalculatorInput = styled.input`
  font-size: 18px;
  padding: 5px;
  margin: 5px;
`;

const CalculatorButton = styled.button`
  font-size: 18px;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
`;

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  const calculateResult = () => {
    const isNumberPlusMinusRegex = /^[0-9+-]+$/;
    if (isNumberPlusMinusRegex.test(expression)) {
      // value starts from number and end with number only
      const cleanedValue = expression.replace(/(^|[^0-9+-])|([^0-9+-]$)/g, " ");
      setResult(eval(cleanedValue));
    } else {
      const cleanedValue = expression.replace(/[^0-9+-]/g, "");
      console.log("Cleaned input:", cleanedValue);
    }
  };
  return (
    <CalculatorContainer>
      <CalculatorInput
        onChange={(value) => setExpression(value.target.value)}
      />
      <CalculatorButton onClick={() => calculateResult()}>
        check result
      </CalculatorButton>
      <br />
      <div>Result: {result}</div>
    </CalculatorContainer>
  );
};

export default Calculator;
