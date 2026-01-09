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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    //* What does the previous button do: When I click a button, I want the current image to move one step back in the queue so to speak
    //* meaning the image index needs to reduce by one, until it hits the lowest number possible (0) and at that point i want it to overflow
    //* meaning that the image index needs to then become the largest possible number, which is the length of the array minus 1 (bc arrays start at index 0)
    // if currentImageIndex - 1 < 0, setCurrentImageIndex(images.length - 1)
    //set currentImageIndex to currentImageIndex + 1

    if (currentImageIndex - 1 < 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  function buttonNext() {
    //* What does the next button do:
    // if currentImageIndex + 1 > images.length -1 setCurrentImageIndex(0)
    //set currentImageIndex to currentImageIndex + 1
    if (currentImageIndex + 1 > images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  //! IF USING UNSPLASH API - THE WAY I ACCESS IMAGE DATA CHANGES - line 71/80/81

  return (
    <>
      <section className="thumbnail-container">
        {images.map((image) => {
          return (
            <button
              className="image-button"
              key={image.id}
              onClick={clickThumbnail}
            >
              <img src={image.url} alt={image.alt} />
            </button>
          );
        })}
      </section>
      <section className="fullscreen-container">
        {/* wrapped in a conditional bc we're checking images.length is not zero - when it is zero we have not received data from the API */}
        {images.length && (
          <img
            src={images[currentImageIndex].url}
            alt={images[currentImageIndex].alt}
          />
        )}
      </section>

      <button
        onClick={buttonPrev}
        aria-label="Go to the previous image"
        className="previous"
      >
        {"<"}
      </button>
      <button
        onClick={buttonNext}
        aria-label="Go to the next image"
        className="next"
      >
        {">"}
      </button>
    </>
  );
}

export default App;
