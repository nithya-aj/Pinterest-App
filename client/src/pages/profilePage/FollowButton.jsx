import Button from "@mui/material/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const followUser = async (userName) => {
  const res = await apiRequest.post(`/users/follow/${userName}`);
  return res.data;
};

const FollowButton = ({ isFollowing, userName }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: followUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile", userName] });
    },
  });

  return (
    <Button
      variant="contained"
      color="error"
      sx={{
        borderRadius: "24px",
        textTransform: "none",
        fontFamily: "Rubik",
        ":disabled": {
          cursor: "not-allowed",
          opacity: 0.5,
        },
      }}
      onClick={() => mutation.mutate(userName)}
      disabled={mutation.isPending}
    >
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default FollowButton;
