import "./comments.css";
import Avatar from "@mui/material/Avatar";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { format } from "timeago.js";
import CommentForm from "./commentForm";

const Comments = ({ id }) => {
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
      <CommentForm />
    </div>
  );
};

export default Comments;
