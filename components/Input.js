const Input = ({ type, placeholder, onChange }) => {
  return (
    <input
      className="text-gray-200 p-2 placeholder:text-gray-200 border-0 bg-gray-600 focus:ring-amber-500 focus:ring-2 text-sm w-full min-w-full md:min-w-min flex rounded-md"
      onChange={(e) => onChange(e.target.value)}
      type={type || "text"}
      placeholder={placeholder}
    />
  );
};

export default Input;
