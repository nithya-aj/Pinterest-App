import "./mainLayout.css";
import { Outlet } from "react-router";
import LeftBar from "../../components/leftBar/leftBar";
import TopBar from "../../components/topBar/topBar";

const Mainlayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
