import { Link } from "react-router";
import Button from "@mui/material/Button";
import { RiShare2Line } from "react-icons/ri";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { BsThreeDots } from "react-icons/bs";
import { buildSrc, Image } from "@imagekit/react";
import { useCallback, useState } from "react";
import ImageCmp from "../imageCmp/imageCmp";

const GalleryItem = ({ item }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return;

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  const placeholderURL = buildSrc({
    urlEndpoint: import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT,
    src: item.media,
    transformation: [
      {
        quality: 20,
        blur: 90,
      },
    ],
  });

  return (
    <Box
      className="galleryItem"
      sx={{
        display: "flex",
        position: "relative",
        gridRowEnd: `span ${Math.ceil(item.height / 100)}`,
        ":hover .overlayIcons": {
          display: "flex",
          position: "absolute",
          bottom: "16px",
          right: "16px",
          alignItems: "center",
          gap: "8px",
        },
        ":hover .overlay ": {
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "16px",
        },
        ":hover .saveBtn": {
          display: "block",
          borderRadius: "24px",
          textTransform: "none",
          position: "absolute",
          top: "16px",
          right: "16px",
        },
      }}
    >
      {/* <Box
        component="img"
        src={item.media}
        alt=""
        loading="lazy"
        sx={{
          width: "100%",
          borderRadius: "16px",
          objectFit: "cover",
        }}
      /> */}

      <ImageCmp
        item={item}
        showPlaceholder={showPlaceholder}
        placeholderURL={placeholderURL}
        imgRef={imgRef}
      />

      <Link
        to={`/pin/${item.id}`}
        className="overlay"
        sx={{
          display: "none",
        }}
      ></Link>
      <Button
        className="saveBtn"
        variant="contained"
        color="error"
        sx={{
          display: "none",
        }}
      >
        Save
      </Button>
      <Box
        className="overlayIcons"
        sx={{
          display: "none",
        }}
      >
        <IconButton
          aria-label="share"
          size="medium"
          sx={{
            color: "black",
            backgroundColor: "#EBEBEB",
            "&:hover": {
              backgroundColor: "#E0E0E0",
            },
          }}
        >
          <RiShare2Line />
        </IconButton>
        <IconButton
          aria-label="share"
          size="medium"
          sx={{
            color: "black",
            backgroundColor: "#EBEBEB",
            "&:hover": {
              backgroundColor: "#E0E0E0",
            },
          }}
        >
          <BsThreeDots />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GalleryItem;
