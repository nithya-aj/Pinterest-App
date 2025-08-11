import IconButton from "@mui/material/IconButton";
import useEditorStore from "../../utils/editorStore";
import { MdDelete } from "react-icons/md";
import { useEffect } from "react";

const Workspace = ({ previewImg }) => {
  const { textOptions, setTextOptions, canvasOptions, setCanvasOptions } =
    useEditorStore();

  useEffect(() => {
    if (canvasOptions.height === 0) {
      const canvasHeight = (375 * previewImg.height) / previewImg.width;
      setCanvasOptions({
        ...canvasOptions,
        height: canvasHeight,
        orientation: canvasHeight > 375 ? "portrait" : "landscape",
      });
    }
  }, [previewImg, canvasOptions, setCanvasOptions]);

  return (
    <div className="workspace">
      <div
        className="canvas"
        style={{
          height: canvasOptions.height,
          backgroundColor: canvasOptions.backgroundColor,
        }}
      >
        <img src={previewImg.url} alt="" />
        {textOptions.text && (
          <div
            className="text"
            style={{
              left: textOptions.left,
              top: textOptions.top,
              fontSize: `${textOptions.fontSize}px`,
            }}
          >
            <input
              type="text"
              value={textOptions.text}
              onChange={(e) =>
                setTextOptions({ ...textOptions, text: e.target.value })
              }
              style={{ color: textOptions.color }}
            />
            <IconButton
              aria-label="share"
              size="medium"
              sx={{
                color: "black",
                backgroundColor: "#EBEBEB",
                position: "absolute",
                top: "-43px",
                right: "6px",
                "&:hover": {
                  backgroundColor: "#E0E0E0",
                },
              }}
              onClick={() => setTextOptions({ ...textOptions, text: "" })}
            >
              <MdDelete />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workspace;
