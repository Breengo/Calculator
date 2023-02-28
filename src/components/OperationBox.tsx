interface IOperationBox {
  operation: string;
  setOperation: (operation: string) => void;
}

const OperationBox: React.FC<IOperationBox> = ({ operation, setOperation }) => {
  return (
    <div
      onClick={() => setOperation(operation)}
      className="px-8 py-3 border border-neutral-400 w-full text-xl text-white flex items-center justify-center cursor-pointer hover:bg-neutral-800"
    >
      {operation}
    </div>
  );
};

export default OperationBox;
