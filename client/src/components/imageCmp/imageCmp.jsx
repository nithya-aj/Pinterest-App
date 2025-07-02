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
      // path={path}
      src={path}
      alt={alt}
      ref={imgRef}
      loading="eager"
      transformation={[{ width: w, height: h }]}
      className={className}
      style={{
        backgroundImage: showPlaceholder ? `url(${placeholderURL})` : "none",
      }}
    />
  );
};

export default ImageCmp;
