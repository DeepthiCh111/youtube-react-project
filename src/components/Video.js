import { useSelector } from "react-redux";
import { Link } from "react-router";
const Video = ({ videoData }) => {
  const isOpen = useSelector((store) => store.slider.isMenuOpen);
  return (
    <div className="w-4/12 flex mb-12">
      <Link to={"/watch?v=" + videoData.id} className="">
        <img
          className={`${isOpen ? "w-96" : "w-[26rem]"} rounded-xl`}
          alt="thumbline"
          src={videoData?.snippet?.thumbnails?.medium?.url}
        />
        <ul className="w-96">
          <li className="text-sm font-semibold">{videoData?.snippet?.title}</li>
          <li className="text-sm font-semibold text-gray-500">
            {videoData?.snippet?.channelTitle || videoData?.channelTitle}
          </li>
          <li className="text-sm font-semibold text-gray-500">
            {videoData?.statistics?.viewCount / 1000 +
              "k views" +
              "   • " +
              timeAgo(videoData?.snippet?.publishedAt)}
          </li>
        </ul>
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
export default Video;
