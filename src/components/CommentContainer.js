import { GoSortDesc } from "react-icons/go";
const commentData = [
  {
    name: "Akshay Saini",
    comment:
      "He is a god of tutor , i have learned a lot from him, i never forget his lectures",
    replies: [
      {
        name: "Akshay Saini",
        comment:
          "He is a god of tutor, i have learned a lot from him, i never forget his lectures",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment:
      "He is a god of tutor, i have learned a lot from him, i never forget his lectures",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "i have learned a lot from him, i never forget his lectures",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "He is a god of tutor",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor😍",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "He is a god of tutor",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor🥰",
        replies: [
          {
            name: "Akshay Saini",
            comment: "He is a god of tutor",
            replies: [
              {
                name: "Akshay Saini",
                comment: "He is a god of tutor",
                replies: [],
              },
            ],
          },
          {
            name: "Akshay Saini",
            comment: "He is a god of tutor",
            replies: [
              {
                name: "Akshay Saini",
                comment: "He is a god of tutor",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "He is a god of tutor",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    comment: "He is a god of tutor",
    replies: [
      {
        name: "Akshay Saini",
        comment: "He is a god of tutor",
        replies: [],
      },
    ],
  },
];

const Comment = ({ commenting }) => {
  return (
    <div>
      <div className="flex">
        <img
          className="w-8 h-8"
          alt="usericon"
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">@{commenting.name}</p>
          <p className="text-sm font-normal">{commenting.comment}</p>
        </div>
      </div>
    </div>
  );
};
const CommentList = ({ comment }) => {
  return (
    <div>
      {comment.map((c, index) => {
        return (
          <div className="mt-3">
            <Comment key={index + c.name} commenting={c} />
            <div className="ml-16 mt-5">
              <CommentList comment={c.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
const CommentConatainer = () => {
  return (
    <div className="mt-5 bg-gray-100 w-full mr-4 text-xl font-bold">
      <div className="flex items-center">
        <h1>Comments</h1>
        <div className="ml-6 flex items-center cursor-pointer">
          <GoSortDesc className="text-2xl font-semibold"></GoSortDesc>
          <p className="text-sm font-semibold">Sort by</p>
        </div>
      </div>

      <div className="flex bg-gray-100 my-8">
        <img
          className="w-9 h-9"
          alt="usericon"
          src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"
        />
        <input
          type="text"
          className="text-sm font-normal text-black ml-3 border pl-3 border-b-gray-400 w-full focus:outline-none"
          placeholder="Add Comment"
        ></input>
      </div>

      <CommentList comment={commentData} />
    </div>
  );
};
export default CommentConatainer;
