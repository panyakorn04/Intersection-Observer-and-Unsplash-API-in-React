import { useState, useEffect, useRef } from "react";

function App() {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPhotos = async (pageNumber) => {
    const Access_Key = "o_UCcXFWcoLAk7_FyJwbmdUnDjKstSd1dQTwxVvjU5o";
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}`
    );
    const data = await res.json();
    setPhotos((p) => [...p, ...data]);
    setIsLoading(true);
  };
  useEffect(() => {
    if (pageNumber) {
      fetchPhotos(pageNumber);
    }
    return;
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const pageEnd = useRef(null);
  let num = 1;
  useEffect(() => {
    if (isLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= 5) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        {
          threshold: 0.5,
        }
      );
      observer.observe(pageEnd.current);
    }
  }, [isLoading, num]);
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Infinite Scrolling using Intersection Observer and Unsplash API in
          React Hooks
        </h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"></div>
        {photos.map((photo, index) => (
          <div key={index}>
            <div className="bg-white group relative rounded-lg ">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {photo.user.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${photo.likes}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination">
          <h4>Loading....</h4>
        </div>
        <h3>{photos.length}</h3>
        <button
          ref={pageEnd}
          onClick={loadMore}
          type="button"
          className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default App;
