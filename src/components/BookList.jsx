import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:8000/api/books", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const booksData = Array.isArray(response.data)
        ? response.data
        : response.data.data || response.data.books || [];
      setBooks(booksData);
    } catch (error) {
      console.error(
        "Error fetching books:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (bookId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete(`http://127.0.0.1:8000/api/books/${bookId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          Swal.fire({
            title: "Deleted!",
            text: "Book deleted successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.id !== bookId)
          );
        } catch (error) {
          console.error("Delete error:", error.response?.data || error.message);
          Swal.fire("Error!", "Failed to delete book.", "error");
        }
      }
    });
  };

  const handleEdit = (bookId) => {
    console.log("Edit book with ID:", bookId);
    navigate(`/updatebook/${bookId}`);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 py-6">Loading books...</p>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Picture
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Published Year
            </th>
            <th scope="col" className="px-6 py-3">
              ISBN
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-gray-400">
                No books found
              </td>
            </tr>
          ) : (
            books.map((book) => (
              <tr
                key={book.id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <img
                    // src={book.picture}
                    src={book.picture || "https://via.placeholder.com/150"}
                    alt={book.title}
                    className="w-30 h-20 object-cover rounded-full"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {book.title}
                </td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.published_year}</td>
                <td className="px-6 py-4">{book.isbn}</td>
                <td className="px-6 py-4">{book.description}</td>
                <td className="px-6 py-4">{book.price}</td>
                <td className="px-6 py-4 flex justify-center space-x-3">
                  {/* <button
                    onClick={() => handleEdit(book.id)}
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Edit"
                  >
                    <FiEdit className="w-5 h-5" />
                  </button> */}
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(book.id)}
                  >
                    Edit
                  </button>
                  {/* <button onClick={() => handlePageChange("updatebook", book.id)}>
  Edit
</button> */}
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label="Delete"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
