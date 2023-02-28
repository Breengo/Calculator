import React from "react";
import DigitBox from "./components/DigitBox";
import OperationBox from "./components/OperationBox";

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const operations = ["+", "-", "*", "/"];

function App() {
  const [numbers, setNumbers] = React.useState<number[]>([0, 0]);
  const [result, setResult] = React.useState<number | null>(null);
  const [operation, setOpertaion] = React.useState("");
  const calculate = () => {
    switch (operation) {
      case "/":
        setResult(numbers[0] / numbers[1]);
        break;
      case "*":
        setResult(numbers[0] * numbers[1]);
        break;
      case "+":
        setResult(numbers[0] + numbers[1]);
        break;
      case "-":
        setResult(numbers[0] - numbers[1]);
        break;
    }
    setNumbers([0, 0]);
    setOpertaion("");
  };
  return (
    <div className="w-full h-screen bg-neutral-700 flex items-center justify-center">
      <div className="border-2 border-neutral-400 w-96 h-fit rounded-lg shadow-xl shadow-neutral-800">
        <div className="w-full h-20 border-b-2 border-neutral-400 flex items-center justify-start py-2 px-4">
          <p className="text-xl font-bold text-white overflow-hidden">
            {result
              ? result
              : `${numbers[0] ? numbers[0] : 0} ${operation} ${
                  numbers[1] ? numbers[1] : ""
                }`}
          </p>
        </div>
        <div className="flex w-full">
          <div className="flex flex-wrap w-4/6">
            {digits.map((item) => (
              <DigitBox
                setResult={setResult}
                key={item}
                setNumbers={setNumbers}
                numbers={numbers}
                operation={operation}
                digit={item}
              />
            ))}
          </div>
          <div className="flex flex-col w-2/6 justify-center">
            {operations.map((item) => (
              <OperationBox
                key={item}
                setOperation={setOpertaion}
                operation={item}
              />
            ))}
          </div>
        </div>
        <div>
          <p
            onClick={calculate}
            className="text-center text-white font-bold py-4 cursor-pointer hover:bg-neutral-800 rounded-b-md"
          >
            Calculate
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
