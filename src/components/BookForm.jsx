import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../contexts/ThemeContext";
import Swal from "sweetalert2";
import student from "../assets/STUDENT.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
const BookForm = () => {
  const [file, setFile] = useState(null);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_year: "",
    isbn: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreview(null);
    }
  };

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

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (file) {
        data.append("picture", file);
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/books",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book Created Successfully!",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/booklist");
      });

      console.log("Book Created:", response.data);

      setFormData({
        title: "",
        author: "",
        published_year: "",
        isbn: "",
        description: "",
        price: "",
      });
      setFile(null);
    } catch (error) {
      console.error(
        "Error creating book:",
        error.response?.data || error.message
      );
      Swal.fire({
        icon: "error",
        title: "Failed to create book",
        text: error.response?.data?.message || "Validation error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`py-4 px-4 sm:px-6 w-full lg:px-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
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
          <Lottie
            animationData={student}
            loop={true}
            className="w-40 h-40 mx-auto"
          />
          Add New Book
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-white-700">Picture</label>
            <input
              type="file"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            {preview && (
              <div className="mt-3 ">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-full "
                />
              </div>
            )}
          </div>
          <div>
            <label className="block font-medium text-white-700">Title</label>
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
            <label className="block font-medium text-white-700">Author</label>
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
            <label className="block font-medium text-white-700 ">
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
            <label className="block font-medium text-white-700">ISBN</label>
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
            <label className="block font-medium text-white-700">
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
            <label className="block font-medium text-white-700">Price</label>
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
