import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const CommentForm = () => {
  const [open, setOpen] = useState(false);

  return (
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
  );
};

export default CommentForm;
