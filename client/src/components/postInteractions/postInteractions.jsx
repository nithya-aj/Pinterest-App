import "./postInteractions.css";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { RiShare2Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const interact = async (id, type) => {
  const res = await apiRequest.post(`/pins/interact/${id}`, { type });
  return res.data;
};

const PostInteractions = ({ postId }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, type }) => interact(id, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interactionCheck", postId] });
    },
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["interactionCheck", postId],
    queryFn: () =>
      apiRequest
        .get(`/pins/interaction-check/${postId}`)
        .then((res) => res.data),
  });

  if (isPending || error) return;
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <IconButton
          aria-label="like"
          size="medium"
          color="inherit"
          onClick={() => mutation.mutate({ id: postId, type: "like" })}
        >
          {data.isLiked ? <IoIosHeart color="#d32f2f" /> : <IoIosHeartEmpty />}
        </IconButton>
        {data.likeCount}
        <IconButton aria-label="share" size="medium" color="inherit">
          <RiShare2Line />
        </IconButton>
        <IconButton aria-label="settings" size="medium" color="inherit">
          <BsThreeDots />
        </IconButton>
      </div>
      <Button
        variant="contained"
        color="error"
        sx={{ borderRadius: "24px", fontFamily: "Rubik" }}
        disabled={mutation.isPending}
        onClick={() => mutation.mutate({ id: postId, type: "save" })}
      >
        {data.isSaved ? "Saved" : "Save"}
      </Button>
    </div>
  );
};

export default PostInteractions;
