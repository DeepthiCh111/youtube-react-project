import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import SmallVideo from "./SmallVideo";
import { useSelector } from "react-redux";
import { API_KEY } from "../utils/constants";
import { LIVE_API } from "../utils/constants";
import LiveChat from "./LiveChat";

const SmallMainVideoConatiner = () => {
  const value = useSelector((store) => store.testing.testValue);
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const fetchData = async () => {
    if (value == "Live") {
      var data = await fetch(LIVE_API);
    } else {
      var data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          API_KEY
      );
    }

    const json = await data.json();
    if (value == null || value == "Live") {
      setJsonData(json?.items);
    } else {
      const filteredData = json?.items.filter((res) =>
        res?.snippet?.title.toLowerCase().includes(value.toLowerCase())
      );
      setJsonData(filteredData);
    }

    console.log(jsonData);
  };

  const isOpen = useSelector((store) => store.slider.isMenuOpen);

  return (
    <div
      className={`relative flex flex-col items-start bg-white top-16 ${
        isOpen ? "w-full overflow-y-scroll overflow-x-hidden" : "w-full "
      } `}
    >
      {value == "Live" && <LiveChat />}
      <div
        className={`${
          value == "Live" ? "absolute top-[600px]" : " absolute top-0"
        } pb-3 no-scrollbar z-10   bg-white overflow-x-auto ${
          isOpen ? "w-full mx-2" : "w-full px-4 mx-5"
        }`}
      >
        <ButtonList />
      </div>

      <div
        className={`${
          value == "Live" ? "absolute top-[600px]" : ""
        } flex flex-wrap mt-16 justify-between ${
          isOpen ? "w-[calc(100%-1rem)] mx-3" : "w-[calc(100%+3rem)] px-5 mx-0"
        }`}
      >
        {jsonData.map((jsonData) => (
          <SmallVideo key={jsonData.id} videoData={jsonData} />
        ))}
      </div>
    </div>
  );
};
export default SmallMainVideoConatiner;
