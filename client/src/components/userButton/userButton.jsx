import Avatar from "@mui/material/Avatar";
import "./userButton.css";
import { RiArrowDownSLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../../utils/authStore";

const UserButton = () => {
  const navigate = useNavigate();

  const { currentUser, removeCurrentUser } = useAuthStore();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      removeCurrentUser();
      navigate("/auth");
      setAnchorEl(null);
    } catch (err) {
      console.log(err);
    }
  };

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
      <Avatar alt="Travis Howard" src={currentUser.img} />
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
        <MenuItem
          component={Link}
          to={`/${currentUser.userName}`}
          onClick={handleClose}
        >
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  ) : (
    <Link to="/auth" className="loginLink">
      Login/Signup
    </Link>
  );
};

export default UserButton;
