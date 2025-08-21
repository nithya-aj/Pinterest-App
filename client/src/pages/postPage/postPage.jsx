import "./postPage.css";
import ImageCmp from "../../components/imageCmp/imageCmp";
import PostInteractions from "../../components/postInteractions/postInteractions";
import { Link, useParams } from "react-router";
import Avatar from "@mui/material/Avatar";
import Comments from "../../components/comments/comments";
import { IoArrowBack } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const Postpage = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", id],
    queryFn: () => apiRequest.get(`/pins/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred:" + error.message;
  if (!data) return "Pin not found!";

  return (
    <div className="postPage">
      <IconButton aria-label="back_arrow" size="medium" color="inherit">
        <IoArrowBack />
      </IconButton>
      <div className="postContainer">
        <div className="postImg">
          <ImageCmp path={data.media} alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostInteractions postId={id} />
          <Link
            className="postUser"
            to={`/${data.user.userName}`}
            sx={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Avatar src={data.user.img || ""}></Avatar>
            <span>{data.user.displayName}</span>
          </Link>
          <Comments id={data._id} />
        </div>
      </div>
    </div>
  );
};

export default Postpage;
