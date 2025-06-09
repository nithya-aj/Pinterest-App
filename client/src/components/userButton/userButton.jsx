import Avatar from "@mui/material/Avatar";
import "./userButton.css";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";

const UserButton = () => {
  // temp user
  const currentUser = true;
  const [open, setOpen] = useState(false);

  return currentUser ? (
    <div className="userButton">
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <IconButton
        aria-label="home"
        size="medium"
        color="inherit"
        onClick={() => setOpen((prev) => !prev)}
      >
        <RiArrowDownSLine />
      </IconButton>

      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login/Signup
    </a>
  );
};

export default UserButton;
