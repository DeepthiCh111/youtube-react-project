import { useSelector } from "react-redux";
import { API_KEY } from "../utils/constants";
import MainVideo from "./MainVideo";
import SmallMainVideoConatiner from "./SmallMainVideoConatiner";
import { useSearchParams } from "react-router";
const Watchh = () => {
  return (
    <div>
      <div className="flex">
        <MainVideo />
        <SmallMainVideoConatiner />
      </div>
    </div>
  );
};
export default Watchh;
