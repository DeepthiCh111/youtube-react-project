import { FaHome } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { IoDownloadSharp } from "react-icons/io5";
import { Link } from "react-router";
import { addTestValue } from "../utils/testSlice";
const Slider = () => {
  const isOpen = useSelector((store) => store.slider.isMenuOpen);

  const dispatch = useDispatch();
  if (!isOpen)
    return (
      <div className="w-32 z-10 top-16 items-start fixed h-full">
        <ul className="">
          <li
            className="my-5"
            onClick={() => {
              dispatch(addTestValue(null));
            }}
          >
            <Link to="/">
              <FaHome className="ml-5 text-xl cursor-pointer l-0"></FaHome>
              <span className="ml-4 text-[11px] text-left">Home</span>
            </Link>
          </li>

          <li className="my-5">
            <AiOutlineYoutube className="ml-5 text-xl "></AiOutlineYoutube>
            <span className="ml-4  text-[11px] text-left">Shorts</span>
          </li>
          <li className="my-5">
            <AiOutlineYoutube className="ml-5 text-xl"></AiOutlineYoutube>
            <span className="ml-1  text-[11px] text-left">Subscriptions</span>
          </li>
          <li className="my-5">
            <FaUser className="ml-5 mt-5"></FaUser>
            <span className="ml-5  text-[11px] text-left">You</span>
          </li>
          <li className="my-5">
            <IoDownloadSharp className="ml-5 text-xl "></IoDownloadSharp>
            <span className="ml-2  text-[11px] text-left">Downloads</span>
          </li>
        </ul>
      </div>
    );
  return (
    <div className="fixed w-48 no-scrollbar overflow-y-auto  top-16 h-[calc(100vh-64px)]">
      <div className="">
        <ul className="flex flex-col px-5 py-2 border-b border-b-gray-300">
          <Link to="/">
            <li
              className="flex items-center mb-3"
              onClick={() => {
                dispatch(addTestValue(null));
              }}
            >
              <FaHome className="text-2xl mr-3"></FaHome>
              <span className="text-[16px]">Home</span>
            </li>
          </Link>
          <li className="flex items-center mb-3">
            <AiOutlineYoutube className="text-2xl mr-3"></AiOutlineYoutube>
            <span className="text-[16px]">Shorts</span>
          </li>
          <li className="flex items-center mb-3">
            <AiOutlineYoutube className="text-2xl mr-3"></AiOutlineYoutube>
            <span className="text-[16px]">Subscriptions</span>
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <button className="font-semibold ml-3 rounded-xl bg-gray-200 w-44 text-left p-2">
          {"You >"}
        </button>
        <ul className="flex flex-col px-5 py-2 border-b border-b-gray-300">
          <li className="flex items-center mb-3">
            <FaHistory className="font-thin text-xl mr-3"></FaHistory>
            <span className="text-[16px]">History</span>
          </li>
          <li className="flex items-center mb-3">
            <MdOutlineFeaturedPlayList className="text-xl mr-3"></MdOutlineFeaturedPlayList>
            <span className="text-[16px]">Playlists</span>
          </li>
          <li className="flex items-center mb-3">
            <AiOutlineYoutube className="text-xl mr-3"></AiOutlineYoutube>
            <span className="text-[16px]">Your videos</span>
          </li>
          <li className="flex items-center mb-3">
            <MdWatchLater className="font-thin text-xl mr-3"></MdWatchLater>
            <span className="text-[16px]">Watch Later</span>
          </li>
          <li className="flex items-center mb-3">
            <GrLike className="text-xl mr-3"></GrLike>
            <span className="text-[16px]">Liked videos</span>
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <p className="font-semibold ml-3 rounded-xl w-44 text-left p-2">
          Explore
        </p>
        <ul className="flex flex-col px-5 py-2 border-b border-b-gray-300">
          <li className="flex items-center mb-3">
            <FaHistory className="font-thin text-xl mr-3"></FaHistory>
            <span className="text-[16px]">Trending</span>
          </li>
          <li className="flex items-center mb-3">
            <MdOutlineFeaturedPlayList className="text-xl mr-3"></MdOutlineFeaturedPlayList>
            <span className="text-[16px]">Shopping</span>
          </li>
          <li className="flex items-center mb-3">
            <AiOutlineYoutube className="text-xl mr-3"></AiOutlineYoutube>
            <span className="text-[16px]">Music</span>
          </li>
          <li className="flex items-center mb-3">
            <MdWatchLater className="font-thin text-xl mr-3"></MdWatchLater>
            <span className="text-[16px]">Films</span>
          </li>
          <li className="flex items-center mb-3">
            <GrLike className="text-xl mr-3"></GrLike>
            <span className="text-[16px]">Live</span>
          </li>
          <li className="flex items-center mb-3">
            <GrLike className="text-xl mr-3"></GrLike>
            <span className="text-[16px]">Gaming</span>
          </li>
          <li className="flex items-center mb-3">
            <GrLike className="text-xl mr-3"></GrLike>
            <span className="text-[16px]">News</span>
          </li>
          <li className="flex items-center mb-3">
            <GrLike className="text-xl mr-3"></GrLike>
            <span className="text-[16px]">Sports</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
