import { Image } from "@imagekit/react";

const ImageCmp = ({ item, showPlaceholder, placeholderURL, imgRef }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT}
      src={item.media}
      alt="Pictures"
      ref={imgRef}
      loading="eager"
      transformation={[{ width: 372 }]}
      style={{
        width: "100%",
        borderRadius: "16px",
        objectFit: "cover",
        backgroundImage: showPlaceholder ? `url(${placeholderURL})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default ImageCmp;
