import Button from "@mui/material/Button";
import "./createPage.css";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import useAuthStore from "../../utils/authStore";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import Editor from "../../components/editor/editor";
import useEditorStore from "../../utils/editorStore";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQuery } from "@tanstack/react-query";
import BoardForm from "./BoardForm";

const addPost = async (post) => {
  const res = await apiRequest.post("/pins", post);
  return res.data;
};

const Createpage = () => {
  const { currentUser } = useAuthStore();
  const formRef = useRef();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null);
  const [previewImg, setPreviewImg] = useState({
    url: "",
    width: 0,
    height: 0,
  });
  const { textOptions, canvasOptions, resetStore } = useEditorStore();
  const [newBoard, setNewBoard] = useState("");
  const [isNewBoardOpen, setIsNewBoardOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [navigate, currentUser]);

  useEffect(() => {
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setPreviewImg({
          url: URL.createObjectURL(file),
          width: img.width,
          height: img.height,
        });
      };
    }
  }, [file]);

  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      resetStore();
      navigate(`/pin/${data._id}`);
    },
  });

  const handleSubmit = async () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      const formData = new FormData(formRef.current);
      formData.append("media", file);
      formData.append("textOptions", JSON.stringify(textOptions));
      formData.append("canvasOptions", JSON.stringify(canvasOptions));
      formData.append("newBoard", newBoard);
      mutation.mutate(formData);
    }
  };

  const { data, isPending, error } = useQuery({
    queryKey: ["formBoards"],
    queryFn: () => apiRequest.get(`/boards`).then((res) => res.data),
  });

  const handleNewBoard = () => {
    setIsNewBoardOpen((prev) => !prev);
  };

  return (
    <div className="createPage">
      <div className="createTop">
        <h1>{isEditing ? "Design your Pin" : "Create Pin"}</h1>
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "24px",
            textTransform: "none",
            fontFamily: "Rubik",
          }}
          onClick={handleSubmit}
        >
          {isEditing ? "Done" : "Publish"}
        </Button>
      </div>
      {isEditing ? (
        <Editor previewImg={previewImg} />
      ) : (
        <div className="createButton">
          {previewImg.url ? (
            <div className="preview">
              <img src={previewImg.url} alt="" />
              <MdEdit className="editBtn" onClick={() => setIsEditing(true)} />
            </div>
          ) : (
            <>
              <label htmlFor="file" className="upload">
                <div className="uploadTitle">
                  <BsArrowUpCircleFill style={{ fontSize: "2rem" }} />
                  <span>Choose a file</span>
                </div>
                <div className="uploadInfo">
                  We recommend using high quality .jpg files less than 20 MB or
                  .mp4 files less than 200 MB.
                </div>
              </label>
            </>
          )}
          <input
            type="file"
            id="file"
            hidden
            onChange={(e) => setFile(e.target.files[0])}
          />
          <form className="createForm" ref={formRef}>
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
              <input
                type="text"
                placeholder="Add a link"
                name="link"
                id="link"
              />
            </div>
            {(!isPending || !error) && (
              <div className="createFormItem">
                <label htmlFor="board">Board</label>
                <select name="board" id="board">
                  <option value="">Choose a board</option>
                  {data?.map((board) => (
                    <option value={board._id} key={board._id}>
                      {board.title}
                    </option>
                  ))}
                </select>
                <div className="newBoard">
                  {newBoard && (
                    <div className="newBoardContainer">
                      <div className="newBoardItem">{newBoard}</div>
                    </div>
                  )}
                  <div className="createBoardButton" onClick={handleNewBoard}>
                    Create new board
                  </div>
                </div>
              </div>
            )}
            <div className="createFormItem">
              <label htmlFor="tags">Tagged topics</label>
              <input type="text" placeholder="Add tags" name="tags" id="tags" />
              <small>Don&apos;t worry, people won&apos;t see your tags</small>
            </div>
          </form>
          {isNewBoardOpen && (
            <BoardForm
              setIsNewBoardOpen={setIsNewBoardOpen}
              setNewBoard={setNewBoard}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Createpage;
