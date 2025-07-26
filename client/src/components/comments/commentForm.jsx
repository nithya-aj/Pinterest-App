import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const addComment = async (comment) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
};

const CommentForm = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");

  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", id] });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      description: desc,
      pin: id,
    });
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <Input
        sx={{ all: "unset", width: "100%", pl: "16px", fontSize: "15px" }}
        type="text"
        placeholder="Search"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
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
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
