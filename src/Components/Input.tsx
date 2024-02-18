interface props {
  labelforinput: String;
  value: any;
}

export const Input = ({labelforinput, value}: props) => {
  return (
    <div className="flex flex-col p-1">
      <label className="text-white">{labelforinput}</label>
      <input
        type="text"
        className="h-8 rounded-md focus:outline-none font-bold text-[1.125rem] text-[#29221f] text-center w-76"
        value={value}
        readOnly
      />
    </div>
  );
};
