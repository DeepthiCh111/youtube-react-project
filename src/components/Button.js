const Button = ({ name }) => {
  return (
    <p className="flex items-center cursor-pointer  rounded-lg p-2 text-sm font-semibold mx-2 mt-1 bg-gray-200">
      {name}
    </p>
  );
};
export default Button;
