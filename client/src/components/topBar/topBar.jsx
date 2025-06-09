import UserButton from "../userButton/userButton";
import "./topBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* Search */}
      <div className="search">
        <img src="/general/search.svg" alt="search" />
        <input type="text" placeholder="Search" />
      </div>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
