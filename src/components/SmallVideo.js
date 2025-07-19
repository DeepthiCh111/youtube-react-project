import { useSelector } from "react-redux";
import { Link } from "react-router";
const SmallVideo = ({ videoData }) => {
  const isOpen = useSelector((store) => store.slider.isMenuOpen);
  return (
    <div className=" mb-4">
      <Link className="w-full flex" to={"/watch?v=" + videoData.id}>
        <img
          className={`${isOpen ? "w-44 h-30" : "w-[26rem]"} rounded-xl`}
          alt="thumbline"
          src={videoData?.snippet?.thumbnails?.medium?.url}
        />
        <div className="h-20 ml-1">
          <ul>
            <li className="text-xs font-semibold overflow-x-hidden">
              {videoData?.snippet?.title}
            </li>
            <li className="text-xs font-semibold text-gray-500">
              {videoData?.snippet?.channelTitle}
            </li>
            <li className="text-xs font-semibold text-gray-500">
              {videoData?.statistics?.viewCount / 1000 +
                "k views" +
                "   • " +
                timeAgo(videoData?.snippet?.publishedAt)}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

const timeAgo = (dateString) => {
  const now = new Date();
  const publishedDate = new Date(dateString);
  const secondsAgo = Math.floor((now - publishedDate) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const intervals = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "week", seconds: 604800 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (let interval of intervals) {
    const count = Math.floor(secondsAgo / interval.seconds);
    if (count >= 1) {
      return rtf.format(-count, interval.unit); // -count because we want "ago"
    }
  }

  return "just now";
};
export default SmallVideo;
