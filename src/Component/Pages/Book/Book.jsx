import React, { useState } from "react";

const Book = ({ book }) => {
  console.log(book);
  const [showMore, setShowMore] = useState(false);

  const reviewText = showMore
    ? book.review
    : book.review.slice(0, 100);

  return (
    
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10 h-50 bg-blue-50 flex justify-center">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full w-full object-contain rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{book.bookName}</h2>
          <p>
          {reviewText}
          {book.review.length > 100 && (
            <span
              className="text-blue-500 cursor-pointer ml-1"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? " See less" : "... See more"}
            </span>
          )}
        </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
