import {
  AiOutlineDislike,
  AiOutlineDownload,
  AiOutlineLike,
} from "react-icons/ai";
import { BiShare } from "react-icons/bi";

const Snippet = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-3 w-full">
      <h1 className="font-bold text-xl">{data?.items[0]?.snippet?.title}</h1>
      <div className="mt-5 flex items-center">
        <div className="flex w-6/12 items-center">
          <img
            className="w-10 h-10"
            alt="usericon"
            src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
          />
          <div className="ml-2">
            <p className="font-semibold">
              {data?.items[0]?.snippet?.channelTitle || "Channel Name"}
            </p>
            <p className="text-gray-600 text-xs">3.1M Subscribers</p>
          </div>
          <button className="ml-2 text-sm font-semibold py-2 px-4 bg-zinc-900 text-white rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="ml-14">
          <button className="text-black px-3 py-2 text-md bg-zinc-200 border-black rounded-tl-3xl rounded-bl-3xl">
            <div className="flex items-center">
              <AiOutlineLike className="text-xl"></AiOutlineLike>
              <p className="text-sm ml-1 font-bold">
                {parseInt(data?.items[0]?.statistics?.likeCount / 1000 || 0) +
                  "K"}
              </p>
            </div>
          </button>
          <button className="text-black px-2 py-2 border-l-2 border-gray-400 text-md bg-zinc-200 rounded-tr-3xl rounded-br-3xl">
            <AiOutlineDislike className="text-xl"></AiOutlineDislike>
          </button>
        </div>
        <button className="text-black ml-2 px-3 py-2 text-md bg-zinc-200 rounded-3xl">
          <div className="flex items-center ml-2">
            <BiShare className="text-xl text-gray-600"></BiShare>
            <p className="text-sm ml-1 font-semibold">Share</p>
          </div>
        </button>
        <button className="text-black px-3 ml-2 py-2 text-md bg-zinc-200 rounded-3xl">
          <div className="flex items-center">
            <AiOutlineDownload className="text-xl"></AiOutlineDownload>
            <p className="text-sm ml-1 font-semibold">Download</p>
          </div>
        </button>
        <button className="text-black px-2 ml-1 pb-2 text-md font-bold bg-zinc-200 rounded-3xl">
          ...
        </button>
      </div>
    </div>
  );
};
export default Snippet;
