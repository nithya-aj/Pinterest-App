import "./postPage.css";
import ImageCmp from "../../components/imageCmp/imageCmp";
import PostInteractions from "../../components/postInteractions/postInteractions";
import { Link } from "react-router";
import Avatar from "@mui/material/Avatar";
import Comments from "../../components/comments/comments";
import { IoArrowBack } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";

const Postpage = () => {
  return (
    <div className="postPage">
      <IconButton aria-label="back_arrow" size="medium" color="inherit">
        <IoArrowBack />
      </IconButton>
      <div className="postContainer">
        <div className="postImg">
          <ImageCmp path={"/pins/pin1.jpeg"} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link
            className="postUser"
            to={"/john"}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Avatar></Avatar>
            <span>John Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Postpage;
