const NotFound = ({ children }) => {
  return (
    <div className="text-gray-700 text-6xl">
      {children || "Not Found"}
    </div>
  );
};

export default NotFound;
