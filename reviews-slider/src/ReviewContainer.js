import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import reviews from './data';
import Review from './Review';

function ReviewContainer() {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(reviews[index]);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex(() => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex(() => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const handleClickRight = () => {
    nextPerson();
    setReview(reviews[index]);
  };

  const handleClickLeft = () => {
    prevPerson();
    setReview(reviews[index]);
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div>
      <article className="review">
        <Review review={review} />
        <div className="button-container">
          <button type="button" className="arrow" onClick={handleClickLeft}>
            <FaChevronLeft />
          </button>
          <button type="button" className="arrow" onClick={handleClickRight}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </div>
  );
}

export default ReviewContainer;
