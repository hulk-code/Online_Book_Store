import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB, addToWishList } from "../../Utility/utility";

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

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  const handleMarkAsWishList = (id) => {
    addToWishList(id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-200 rounded-xl">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div className="bg-base-100 p-10 rounded-xl flex justify-center">
          <img
            src={image}
            alt={bookName}
            className="h-[420px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{bookName}</h1>

          <p className="text-gray-500 mb-4">By : {author}</p>

          <hr className="mb-4"/>

          <p className="font-semibold mb-4">{category}</p>

          <hr className="mb-4"/>

          <p className="mb-4">
            <span className="font-bold">Review :</span> {review}
          </p>

          <div className="space-y-2 text-sm">
            <p>Number of Pages : {totalPages}</p>
            <p>Publisher : {publisher}</p>
            <p>Year of Publishing : {yearOfPublishing}</p>
            <p>Rating : {rating}</p>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              className="btn btn-outline"
              onClick={() => handleMarkAsRead(bookId)}
            >
              Read
            </button>

            <button
              className="btn btn-info text-white"
              onClick={() => handleMarkAsWishList(bookId)}
            >
              Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetails;