import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const MyBook = ({ singleBook }) => {

  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher
  } = singleBook || {};

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="flex items-center gap-6 border rounded-xl p-6 shadow-sm bg-white mb-5">

        {/* Book Image */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <img
            src={image}
            alt={bookName}
            className="h-[160px] w-[120px] object-contain"
          />
        </div>

        {/* Book Info */}
        <div className="flex-1 space-y-3">

          <h2 className="text-xl font-semibold">{bookName}</h2>

          <p className="text-gray-500">By : {author}</p>

          {/* Tags */}
          <div className="flex gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Book details */}
          <div className="flex gap-6 text-sm text-gray-500">
            <p>Year of Publishing: {yearOfPublishing}</p>
            <p>Publisher: {publisher}</p>
          </div>

          <div className="border-t border-dashed pt-3 flex gap-4 items-center">

            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {category}
            </span>

            <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full flex items-center gap-1">
              {rating} <FaStarHalfAlt />
            </span>

            <button className="bg-green-500 text-white px-4 py-1 rounded-full">
              View Details
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default MyBook;