import "./leftBar.css";
import {
  AiFillHome,
  AiFillMessage,
  AiOutlineHome,
  AiOutlineMessage,
} from "react-icons/ai";
import {
  FaSquarePlus,
  FaBell,
  FaRegSquarePlus,
  FaRegBell,
} from "react-icons/fa6";
import { RiSettingsFill, RiSettingsLine } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <a href="/" className="menuIcon">
          <img src="/general/logo.png" alt="logo" className="logo" />
        </a>
        <IconButton aria-label="home" size="medium" color="inherit">
          <AiOutlineHome />
        </IconButton>
        <IconButton aria-label="create" size="medium" color="inherit">
          {" "}
          <FaRegSquarePlus />
        </IconButton>
        <IconButton aria-label="nots" size="medium" color="inherit">
          <FaRegBell />
        </IconButton>
        <IconButton aria-label="message" size="medium" color="inherit">
          <AiOutlineMessage />
        </IconButton>
      </div>
      <IconButton aria-label="settings" size="medium" color="inherit">
        <RiSettingsLine />
      </IconButton>
    </div>
  );
};

export default LeftBar;