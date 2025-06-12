import { Image } from "@imagekit/react";

const ImageCmp = ({
  showPlaceholder,
  placeholderURL,
  className,
  imgRef,
  path,
  alt,
  w,
  h,
}) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IMAGEKIT_ENDPOINT}
      src={path}
      alt={alt}
      ref={imgRef}
      loading="eager"
      transformation={[{ width: w, height: h }]}
      className={className}
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
