import UserButton from "../userButton/userButton";
import { IoSearch } from "react-icons/io5";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import "./topBar.css";
import { useNavigate } from "react-router";

const TopBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  };

  return (
    <div className="topBar">
      <Box
        component={"form"}
        onSubmit={handleSubmit}
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
          placeholder="Search"
          disableUnderline
          fullWidth
          sx={{ py: 0.75, fontSize: "15px" }}
        />
      </Box>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
