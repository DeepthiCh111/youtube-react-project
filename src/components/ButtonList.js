import { useDispatch } from "react-redux";
import Button from "./Button";
import { addTestValue } from "../utils/testSlice";
const ButtonList = () => {
  const dispatch = useDispatch();

  const buttonList = [
    "All",
    "WebDevelopment",
    "Live",
    "WebSeries",
    "DataStructures",
    "ComputerScience",
    "Comedy",
    "Songs",
    "Movies",
    "Cartoons",
    "Art",
    "Dance",
    "Learning",
    "Cartoons",
    "Art",
    "Dance",
    "Learning",
  ];
  return (
    <div className="flex bg-white">
      {buttonList.map((name, index) => (
        <Button
          key={index + name}
          name={name}
          onClick={() => {
            dispatch(addTestValue(name));
          }}
        />
      ))}
    </div>
  );
};
export default ButtonList;
