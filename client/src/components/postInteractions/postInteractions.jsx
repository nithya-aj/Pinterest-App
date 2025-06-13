import "./postInteractions.css";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <IconButton aria-label="settings" size="medium" color="inherit">
          <IoIosHeartEmpty />
        </IconButton>
        273
        <IconButton aria-label="settings" size="medium" color="inherit">
          <RiShare2Line />
        </IconButton>
        <IconButton aria-label="settings" size="medium" color="inherit">
          <BsThreeDots />
        </IconButton>
      </div>
      <Button variant="contained" color="error" sx={{ borderRadius: "24px" }}>
        Save
      </Button>
    </div>
  );
};

export default PostInteractions;
