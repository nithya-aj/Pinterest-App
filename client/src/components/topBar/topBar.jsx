import UserButton from "../userButton/userButton";
import { IoSearch } from "react-icons/io5";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const TopBar = () => {
  return (
    <Box
      className="topBar"
      sx={{ m: "16px 0px", display: "flex", alignItems: "center", gap: "16px" }}
    >
      {/* Search */}
      <Box
        className="search"
        sx={{
          flex: 1,
          bgcolor: "#f1f1f1",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          px: "16px",
        }}
      >
        <IoSearch color="gray" style={{ fontSize: "1.3rem" }} />
        <Input
          sx={{ all: "unset", width: "100%", py: "6px", fontSize: "15px" }}
          type="text"
          placeholder="Search"
        />
      </Box>
      {/* User */}
      <UserButton />
    </Box>
  );
};

export default TopBar;
