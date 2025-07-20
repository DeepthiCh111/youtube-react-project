import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import Video from "./Video";
import { useSelector } from "react-redux";
import { API_KEY } from "../utils/constants";
import { LIVE_API } from "../utils/constants";

const MainVideoContainer = () => {
  const value = useSelector((store) => store.testing.testValue);
  const [jsonData, setJsonData] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const fetchData = async () => {
    var data;
    if (value == "Live") {
      data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          API_KEY);
    } else {
      data = await fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
          API_KEY
      );
    }

    const json = await data.json();
    if (value == null) {
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
      className={`flex flex-col items-start bg-white top-12 relative ${
        isOpen
          ? "w-10/12 ml-60 overflow-y-scroll overflow-x-hidden"
          : "w-full ml-32"
      } `}
    >
      <div
        className={`fixed top-16 pb-3 no-scrollbar z-10  bg-white overflow-x-auto ${
          isOpen
            ? "w-[calc(100%-18rem)] mx-2"
            : "w-[calc(100%-8.5rem)] px-4 mr-0"
        }`}
      >
        <ButtonList />
      </div>

      <div
        className={`flex flex-wrap mt-24 justify-between ${
          isOpen ? "w-[calc(100%-1rem)] mx-3" : "w-[calc(100%+3rem)] px-5 mx-0"
        }`}
      >
        {jsonData.map((jsonData) => (
          <Video key={jsonData.id} videoData={jsonData} />
        ))}
      </div>
    </div>
  );
};
export default MainVideoContainer;
