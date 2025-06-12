import Avatar from "@mui/material/Avatar";
import "./userButton.css";
import { RiArrowDownSLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const UserButton = () => {
  // temp user
  const currentUser = true;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return currentUser ? (
    <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <IconButton
        aria-label="home"
        size="medium"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <RiArrowDownSLine />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  ) : (
    <a href="/" className="loginLink">
      Login/Signup
    </a>
  );
};

export default UserButton;
