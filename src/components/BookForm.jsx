import React, { useState } from "react";
import axios from "axios"; // <-- Import axios
import { useTheme } from "../contexts/ThemeContext";
import Swal from "sweetalert2";
import student from "../assets/STUDENT.json";
import Lottie from "lottie-react";
const BookForm = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_year: "",
    isbn: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); 

      const response = await axios.post(
        "http://127.0.0.1:8000/api/books",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Book Created Successfully!",
  showConfirmButton: false,
  timer: 1500
});
     
      console.log(response.data);

      // Reset form
      setFormData({
        title: "",
        author: "",
        published_year: "",
        isbn: "",
        description: "",
        price: "",
      });
    } catch (error) {
      console.error(" Error creating book:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to create book");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`py-4 px-4 sm:px-6 w-full lg:px-8 ${ theme === "dark" ? "bg-gray-900" : "bg-gray-50" }`}
    >
      <div
        className={`max-w-md mx-auto ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8`}
      >
        <h1
          className={`text-2xl font-bold mb-6 text-center  ${
            theme === "dark" ? "text-white" : "text-gray-800 "
          }`}
        >
         <Lottie animationData={student} loop={true} className="w-64 h-64 mx-auto" />
          Add New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>


          <div>
            <label className="block font-medium text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>


          <div>
            <label className="block font-medium text-gray-700">
              Published Year
            </label>
            <input
              type="number"
              name="published_year"
              value={formData.published_year}
              onChange={handleChange}
              placeholder="e.g. 2001"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>


          <div>
            <label className="block font-medium text-gray-700">ISBN</label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              placeholder="Enter ISBN"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter book description"
              rows="3"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

    
          <div>
            <label className="block font-medium text-gray-700">Price</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter book price"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-teal-500 to-purple-500 text-white py-3 rounded-full font-semibold hover:opacity-90 transition ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
          >
            {loading ? "Saving..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
