import { IoClose } from "react-icons/io5";

const BoardForm = ({ setIsNewBoardOpen, setNewBoard }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    setNewBoard(title);
    setIsNewBoardOpen(false);
  };

  return (
    <div className="boardForm">
      <div className="boardFormContainer">
        <div
          className="boardFormClose"
          onClick={() => setIsNewBoardOpen(false)}
        >
          <IoClose style={{ fontSize: "1.5rem" }} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Create a new board</h1>
          <input type="text" placeholder="Board Title" />
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default BoardForm;
