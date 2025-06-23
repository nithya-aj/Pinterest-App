import Button from "@mui/material/Button";
import "./createPage.css";
import { BsArrowUpCircleFill } from "react-icons/bs";

const Createpage = () => {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>Create Pin</h1>
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "24px",
            textTransform: "none",
            fontFamily: "Rubik",
          }}
        >
          Publish
        </Button>
      </div>
      <div className="createButton">
        <div className="upload">
          <div className="uploadTitle">
            <BsArrowUpCircleFill style={{ fontSize: "2rem" }} />
            <span>Choose a file</span>
          </div>
          <div className="uploadInfo">
            We recommend using high quality .jpg files less than 20 MB or .mp4
            files less than 200 MB.
          </div>
        </div>
        <form className="createForm" action="">
          <div className="createFormItem">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              name="title"
              id="title"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">Description</label>
            <textarea
              rows={6}
              type="text"
              placeholder="Add a detailed description"
              name="description"
              id="description"
            />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">Link</label>
            <input type="text" placeholder="Add a link" name="link" id="link" />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">Board</label>
            <select name="board" id="board">
              <option value="">Choose a board</option>
              <option value="">Board 1</option>
              <option value="">Board 2</option>
              <option value="">Board 3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">Tagged topics</label>
            <input type="text" placeholder="Add tags" name="tags" id="tags" />
            <small>Don&apos;t worry, people won&apos;t see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createpage;
