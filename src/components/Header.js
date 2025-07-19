import { FaMicrophone } from "react-icons/fa";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/SliderSlice";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { QUERY_SUGGESTIONS } from "../utils/constants";
import { addSearchResult } from "../utils/searchSlice";
import { addTestValue } from "../utils/testSlice";
const Header = () => {
  const dispatch = useDispatch();
  const [searchPanel, setSearchPanel] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const cachedResult = useSelector((store) => store.search);
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedResult[searchValue]) {
        setSearchResults(cachedResult[searchValue]);
      } else {
        getSearchApiResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  const getSearchApiResult = async () => {
    const data = await fetch(QUERY_SUGGESTIONS + searchValue);
    const json = await data.json();

    setSearchResults(json[1]);

    dispatch(addSearchResult({ [searchValue]: json[1] }));
  };
  const handleSlider = () => {
    dispatch(toggle());
  };
  return (
    <div className="grid fixed z-50 bg-white w-full py-2 grid-flow-col mx-2">
      <div className="flex col-span-1 ml-3">
        <img
          onClick={() => handleSlider()}
          className="w-7 h-12 cursor-pointer"
          alt="menuicon"
          src="https://www.svgrepo.com/show/446702/hamburger-menu.svg"
        />
        <Link to="/">
          <img
            className="ml-2 w-20 h-12"
            alt="youtubelogo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
          />
        </Link>
      </div>
      <div className="col-span-10 flex items-center">
        <div className="w-[550px] ml-60">
          <input
            type="text"
            className="p-3 w-full h-10 border border-gray-400 rounded-l-2xl"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => setSearchPanel(true)}
            onBlur={() => setSearchPanel(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchValue(e.target.value);
                setSearchResults([]);
                dispatch(addTestValue(e.target.value));
              }
            }}
          />
          {searchResults.length > 0 && searchPanel && (
            <div className="fixed w-[550px] rounded-lg p-3 bg-white shadow-lg shadow-gray-400 border-gray-200">
              <ul>
                {searchResults.map((s) => (
                  <li className="flex p-3 hover:bg-gray-100">
                    <AiOutlineSearch className="text-2xl font-thin mr-2"></AiOutlineSearch>
                    <p className="font-semibold text-md">{s}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          className="border border-l-0 border-slate-400 bg-gray-100 h-10 w-16 rounded-r-2xl"
          onClick={() => {
            setSearchValue(searchValue);
            setSearchResults([]);
            dispatch(addTestValue(searchValue));
          }}
        >
          <AiOutlineSearch className="ml-4 text-2xl"></AiOutlineSearch>
        </button>
        <div className="ml-4 bg-gray-200 p-3 rounded-full">
          <FaMicrophone className="text-lg"></FaMicrophone>
        </div>
      </div>

      <div className="col-span-1 flex items-center justify-between px-6">
        <button className=" py-0 w-24 flex items-center justify-center bg-gray-200 rounded-2xl">
          <h1 className="text-4xl text-gray-500 font-thin mb-1">+</h1>
          <p className="mt-2 text-md font-semibold">Create</p>
        </button>
        <AiOutlineBell className="text-2xl  text-gray-900 font-thin"></AiOutlineBell>
        <img
          className="w-8"
          alt="usericon"
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
        />
      </div>
    </div>
  );
};
export default Header;
