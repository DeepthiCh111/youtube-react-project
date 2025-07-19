const ChatMessage = ({ data }) => {
  return (
    <div className="flex items-center p-2 top-[500px]">
      <img
        className="w-6 h-6"
        alt="usericon"
        src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
      />
      <h1 className="text-sm font-semibold mx-2">{data.name}</h1>
      <p className="text-sm">{data.comment + "❤️"}</p>
    </div>
  );
};

export default ChatMessage;
