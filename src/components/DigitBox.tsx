interface IDigitBox {
  digit: number;
  setNumbers: (num: number[]) => void;
  numbers: number[];
  operation: string;
  setResult: (result: null) => void;
}

const DigitBox: React.FC<IDigitBox> = ({
  digit,
  setNumbers,
  numbers,
  operation,
  setResult,
}) => {
  return (
    <div
      onClick={() => {
        setResult(null);
        setNumbers(
          operation
            ? [numbers[0], Number(numbers[1].toString() + digit)]
            : [Number(numbers[0].toString() + digit), 0]
        );
      }}
      className="px-4 py-2 border border-neutral-400 w-1/3 text-white text-xl flex items-center justify-center cursor-pointer hover:bg-neutral-800 shadow-inner shadow-neutral-800"
    >
      {digit}
    </div>
  );
};

export default DigitBox;
