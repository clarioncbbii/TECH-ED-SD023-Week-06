//* REMEMBER YOUR IMPORTS!
import "./App.css";
import { useState, useEffect } from "react";

//! DO NOT PUT ALL YOUR CODE IN App.jsx
//! USE COMPONENTS

// Start with wireframe: build your React app UI first, then start coding

function App() {
  // STATE:
  // - variable to store API image data
  const [images, setImages] = useState([]);

  // - variable to store current image
  const [currentImage, setCurrentImage] = useState(0);

  // EFFECTS
  // - fetch data from the API
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      // - once fetched, put it in state
      setImages(data);
    }

    getData();
  }, []);

  // functions (event handlers)
  // - when a user clicks an image
  // - when a user presses a button that should switch the image (left and right)

  function clickThumbnail() {
    console.log("I was cliqued.");
  }

  function buttonPrev() {
    console.log("I was cliqued.");
  }

  function buttonNext() {
    console.log("I was cliqued.");
  }

  console.log(images[currentImage]);

  return (
    <>
      <section className="thumbnail-container">
        {images.map((image) => {
          return (
            <button key={image.id} onClick={clickThumbnail}>
              <img src={image.url} alt={image.alt} />
            </button>
          );
        })}
      </section>
      <section className="fullscreen-container">
        {/* wrapped in a conditional bc we're checking images.length is not zero - when it is zero we have not received data from the API */}
        {images.length && (
          <img src={images[currentImage].url} alt={images[currentImage].alt} />
        )}
      </section>

      <button
        onClick={buttonNext}
        aria-label="Go to the previous image"
        className="previous"
      >
        {"<"}
      </button>
      <button
        onClick={buttonPrev}
        aria-label="Go to the next image"
        className="next"
      >
        {">"}
      </button>
    </>
  );
}

export default App;
