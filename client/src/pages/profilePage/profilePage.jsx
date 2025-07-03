import Avatar from "@mui/material/Avatar";
import "./profilePage.css";
import IconButton from "@mui/material/IconButton";
import { RiShare2Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import Boards from "../../components/boards/boards";

const Profilepage = () => {
  const [type, setType] = useState("saved");
  const { userName } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["profile", userName],
    queryFn: () => apiRequest.get(`/users/${userName}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred:" + error.message;
  if (!data) return "User not found!";

  return (
    <div className="profilePage">
      <Avatar src={data.img || ""} sx={{ height: 100, width: 100 }} />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUserName">@{data.userName}</span>
      <div className="followCounts">10 followers . 20 followings </div>
      <div className="profileInteractions">
        <IconButton
          aria-label="share"
          size="medium"
          sx={{
            color: "black",
          }}
        >
          <RiShare2Line />
        </IconButton>
        <div className="profileButtons">
          <Button
            variant="contained"
            color="inherit"
            sx={{
              borderRadius: "24px",
              textTransform: "none",
              fontFamily: "Rubik",
            }}
          >
            Message
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: "24px",
              textTransform: "none",
              fontFamily: "Rubik",
            }}
          >
            Follow
          </Button>
        </div>
        <IconButton aria-label="settings" size="medium" color="inherit">
          <BsThreeDots />
        </IconButton>
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? (
        <Gallery userId={data._id} />
      ) : (
        <Boards userId={data._id} />
      )}
    </div>
  );
};

export default Profilepage;
