import "./comments.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { useQuery } from "@tanstack/react-query";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { format } from "timeago.js";

const Comments = ({ id }) => {
  const [open, setOpen] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred:" + error.message;
  if (!data) return "Pin not found!";

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data.length === 0 ? "No comments" : data.length + " comments"}
        </span>
        {/* Comment */}
        {data.map((comment) => (
          <div className="comment" key={data._id}>
            <Avatar src={comment.user.img || ""}></Avatar>
            <div className="commentContent">
              <span className="commentUserName">
                {comment.user.displayName}
              </span>
              <p className="commentText">{comment.description}</p>
              <span className="commentTime">{format(comment.createdAt)}</span>
            </div>
          </div>
        ))}
      </div>
      <form className="commentForm">
        <Input
          sx={{ all: "unset", width: "100%", pl: "16px", fontSize: "15px" }}
          type="text"
          placeholder="Search"
        />
        <div className="emoji">
          {/* <div>&#128522;</div> */}
          <IconButton
            color="inherit"
            size="small"
            onClick={() => setOpen((prev) => !prev)}
          >
            &#128522;
          </IconButton>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
