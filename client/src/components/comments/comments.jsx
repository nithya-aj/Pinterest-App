import "./comments.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const Comments = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comment</span>
        {/* Comment */}
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
        <div className="comment">
          <Avatar></Avatar>
          <div className="commentContent">
            <span className="commentUserName">John Doe</span>
            <p className="commentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus, explicabo!
            </p>
            <span className="commentTime">1 hr</span>
          </div>
        </div>
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
