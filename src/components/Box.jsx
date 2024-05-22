const Box = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" hover:bg-stone-200/50 border border-black size-16 p-4 flex items-center justify-center text-xl"
    >
      {value}
    </div>
  );
};

export default Box;
