import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Booksall() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://127.0.0.1:8000/api/books", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err.response?.data || err));
  }, []);
  console.log(books);
  return (
    <div className="py-6 mb-6 ml-3 md:grid grid-cols-4  gap-2  ">
      {books.map((book) => (
        <div key={book.id} className=" bg-base-100 w-96  rounded-md border p-4">
          <figure className="px-10 pt-10">
            <img
              //   src={`${import.meta.env.VITE_API_BASE_URL}${book.picture}`}
              src={book.picture || "https://via.placeholder.com/150"}
              alt={book.title}
              className="rounded-xl w-80 h-48 "
            />
          </figure>
          <div className=" items-center text-center">
            <h2 className=" text-2xl font-serif text-cyan-800  ">
              Name: {book.title}
            </h2>
            <p className=" text-2xl font-serif text-emerald-700">
              Author: {book.author}
            </p>
            <p className="text-indigo-800 text-2xl font-semibold ">
              Price: {book.price} BDT
            </p>
            <div className="">
              <button className="group cursor-pointer  w-[300px] h-[45px] relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-transparent bg-gradient-to-br from-cyan-800 to-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
