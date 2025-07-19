import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/SliderSlice";
import { useSearchParams } from "react-router";
import { API_KEY } from "../utils/constants";
import Snippet from "./Snippet";
import CommentConatainer from "./CommentContainer";
const MainVideo = () => {
  const isOpen = useSelector((store) => store.slider.isMenuOpen);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [details, setDetails] = useState(null);

  const dispatch = useDispatch();
  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData();
  }, [videoId]);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
    );
    const json = await data.json();
    setDetails(json);
    dispatch(closeMenu());
  };
  return (
    <div
      className={`flex flex-col items-start top-16 bg-white  relative ${
        isOpen ? "w-10/12 ml-60" : "w-full ml-32"
      } `}
    >
      <div className="">
        <div className="">
          <iframe
            className="w-[860px] h-[490px] rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Snippet data={details} />
      <CommentConatainer />
    </div>
  );
};

export default MainVideo;
