import { useQuery } from "@tanstack/react-query";
import ImageCmp from "../imageCmp/imageCmp";
import "./boards.css";
import apiRequest from "../../utils/apiRequest";
import { format } from "timeago.js";
import { Link } from "react-router";

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  if (!data) return "Pin not found!"; 

  return (
    <div className="collections">
      {/* Collection */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          key={board._id}
          className="collection"
        >
          <ImageCmp path={board.firstPin.media} alt="" />
          <div className="collectionInfo">
            <h1>{board.title}</h1>
            <span>
              {board.pinCount} pins . {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Boards;
