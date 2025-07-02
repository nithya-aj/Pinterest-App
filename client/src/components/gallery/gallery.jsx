import { useInfiniteQuery } from "@tanstack/react-query";
import GalleryItem from "../galleryItem/galleryItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "./gallery.css";
import axios from "axios";

const Gallery = () => {
  const fetchPins = async ({ pageParam }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`
    );
    return res.data;
  };

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins"],
    queryFn: fetchPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "error") return "Something went wront...";
  if (status === "pending") return "Loading... ";

  console.log(data);

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins</h4>}
      endMessage={<h3>All pins loaded!</h3>}
    >
      <div className="gallery">
        {allPins.map((item) => (
          <GalleryItem key={item._id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
