import Avatar from "@mui/material/Avatar";
import "./profilePage.css";
import IconButton from "@mui/material/IconButton";
import { RiShare2Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";

const Profilepage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Avatar sx={{ height: 100, width: 100 }} />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUserName">@johndoe</span>
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
            sx={{ borderRadius: "24px", textTransform: "none" }}
          >
            Message
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ borderRadius: "24px", textTransform: "none" }}
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
    </div>
  );
};

export default Profilepage;
