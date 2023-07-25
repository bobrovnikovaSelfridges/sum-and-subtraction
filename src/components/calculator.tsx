import React, { useState } from "react";
import styled from "styled-components";
import { calculateResult } from "../utils/calculate-result";

const CalculatorContainer = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  padding: 10px;
`;

const Mssg = styled.div`
  color: red;
  font-size: 12px;
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
  const [message, setMessage] = useState<string>("");

  return (
    <CalculatorContainer>
      <CalculatorInput
        onChange={(value) => setExpression(value.target.value)}
      />
      <CalculatorButton
        onClick={() => {
          const calculationResult = calculateResult(expression);
          if (calculationResult) setMessage(calculationResult.message);
          setResult(calculationResult.result);
        }}
      >
        check result
      </CalculatorButton>
      <br />
      {message ? <Mssg>{message}</Mssg> : <div>Result: {result}</div>}
    </CalculatorContainer>
  );
};

export default Calculator;
