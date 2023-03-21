const CountBox = ({ text, num }) => {
  return (
    <div className="bg-gray-700 rounded-md p-5 gap-2 flex items-end justify-end">
      <span clas class="text-gray-400">
        {text}
      </span>
      <span className="text-6xl font-bold text-white">{num}</span>
    </div>
  );
};

export default CountBox;
