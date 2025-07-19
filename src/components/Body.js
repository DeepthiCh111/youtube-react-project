import { Outlet } from "react-router";

import Slider from "./Slider";
const Body = () => {
  return (
    <div className="flex bg-white top-32">
      <Slider />
      <Outlet />
    </div>
  );
};

export default Body;
