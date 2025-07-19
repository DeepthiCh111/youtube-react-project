import { AiOutlineClose } from "react-icons/ai";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomSentence, generate } from "../utils/helper";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({ name: generate(), comment: generateRandomSentence() })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div>
      <div className="p-3 ml-3 w-96 bg-gray-100 flex items-center justify-between border border-b-gray-300">
        <h1 className="text-lg font-normal">Live chat</h1>
        <AiOutlineClose className="text-xl"></AiOutlineClose>
      </div>
      <div className="w-96 ml-3 bg-gray-100 top-36 h-[500px] border overflow-y-scroll border-gray-300 flex flex-col-reverse">
        {chatMessages.length > 0 &&
          chatMessages.map((chat) => <ChatMessage data={chat} />)}
      </div>

      <div className="w-96 bg-gray-100 ml-3 h-[30px] border border-gray-300">
        <input
          type="text"
          placeholder="Add comment....."
          className="p-2 w-full border rounded-b-lg border-b-gray-300 focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(
                addMessage({
                  name: "Deepthi World",
                  comment: e.target.value,
                })
              );
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default LiveChat;
