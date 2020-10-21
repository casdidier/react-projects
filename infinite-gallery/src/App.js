import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


import "./App.css";
// REACT_APP_UNSPLASH_ACCESS_KEY=
const accessKey = "gLm6DmIJtReYLHL-ahCWxYrABPqfnQ8E0B7AwVX1bJk";

export default function App() {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("water");

  useEffect(() => {
    getPhotos();
    // eslint-disable-next-line
  }, [page]);

  function searchPhotos(e) {
    e.preventDefault();
    setPage(1);
    getPhotos();
  }

  function getPhotos() {
    let apiUrl = `https://api.unsplash.com/photos?`;
    if (query) apiUrl = `https://api.unsplash.com/search/photos?query=${query}`;
    apiUrl += `&page=${page}`;
    apiUrl += `&client_id=${accessKey}`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const imagesFromApi = data.results ?? data;

        console.log("DONE", images);

        // if page is 1, then we need a whole new array of images
        if (page === 1) setImages(imagesFromApi);

        // if page > 1, then we are adding for our infinite scroll
        setImages(images => [...images, ...imagesFromApi]);
      });
  }

  if (!accessKey) {
    return (
      <a href="https://unsplash.com/developers" className="error">
        Required: Get Your Unsplash API Key First
      </a>
    );
  }


  return (
    <>
      <div className="app">
        <div className="search-bar">
          <form onSubmit={searchPhotos}>
            <input
              type="text"
              placeholder="Search Unsplash..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button>Search</button>
          </form>
        </div>
        {images.length > 0 &&
          <InfiniteScroll
            dataLength={images.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            <div className="image-grid">
              {images.map((image, index) => (
                <a
                  className="image"
                  key={index}
                  href={image.links.html}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image.urls.regular} alt={image.alt_description} />
                </a>
              ))}
            </div>
          </InfiniteScroll>}
      </div>
    </>
  )
}
