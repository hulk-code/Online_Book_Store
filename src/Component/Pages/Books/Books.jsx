import React, { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const displayedBooks = showAll ? books : books.slice(0, 4);

  return (
    <div className=""> 
    <div className="text-center font-bold text-5xl p-5">
        <p>Books</p>
    </div>
      <div className=" lg:ml-30 grid grid-cols-1 lg:grid-cols-2  gap-4 ">
        {displayedBooks.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          className="btn btn-primary"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Books;