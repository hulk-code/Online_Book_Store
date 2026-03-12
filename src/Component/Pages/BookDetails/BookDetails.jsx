import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-200 rounded-xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Image */}
        <div className="bg-base-100 p-10 rounded-xl flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="h-[420px] object-contain"
          />
        </div>

        {/* Right Side - Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>

          <p className="text-gray-500 mb-4">By : {author}</p>

          <hr className="mb-4"/>

          <p className="font-semibold mb-4">{category}</p>

          <hr className="mb-4"/>

          <p className="mb-4">
            <span className="font-bold">Review :</span> {review}
          </p>

          {/* Tags */}
          <div className="flex gap-3 mb-6">
            <span className="badge badge-success">#{category}</span>
            <span className="badge badge-outline">#Young Adult</span>
          </div>

          <hr className="mb-4"/>

          {/* Book Info */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-500">Number of Pages :</span>{" "}
              {totalPages}
            </p>

            <p>
              <span className="text-gray-500">Publisher :</span> {publisher}
            </p>

            <p>
              <span className="text-gray-500">Year of Publishing :</span>{" "}
              {yearOfPublishing}
            </p>

            <p>
              <span className="text-gray-500">Rating :</span> {rating}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="btn btn-outline">Read</button>
            <button className="btn btn-info text-white">Wishlist</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;