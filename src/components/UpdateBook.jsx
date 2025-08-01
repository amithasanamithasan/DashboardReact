import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";
import Lottie from "lottie-react";
    import Book from "../assets/Bookss.json";
const UpdateBook = () => {
 
  const navigate = useNavigate();
const { id } = useParams(); 
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    published_year: "",
    isbn: "",
    description: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);

  
 useEffect(() => {
  const fetchBook = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found");
        return;
      }

      const response = await axios.get(`http://127.0.0.1:8000/api/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log("API response:", response);
      const bookData = response.data.data ?? response.data;
      setFormData({
        title: bookData.title || "",
        author: bookData.author || "",
        published_year: bookData.published_year || "",
        isbn: bookData.isbn || "",
        description: bookData.description || "",
        price: bookData.price || "",
      });
    } catch (error) {
      console.error(" Fetch error:", error.response?.status, error.response?.data || error.message);
      Swal.fire("Error", "Failed to fetch book data", "error");
    }
  };
  if (id) fetchBook();
}, [id]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const dataToSend = {
      ...formData,
      price: Number(formData.price),
      published_year: Number(formData.published_year),
    };

    try {
      const token = localStorage.getItem("token");

      await axios.put(`http://127.0.0.1:8000/api/books/${id}`, dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Book Updated Successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/booklist");
    } catch (error) {
      console.error("Update error:", error.response?.data || error.message);
      Swal.fire(
        "Error",
        error.response?.data?.message || "Failed to update book",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <Lottie animationData={Book} loop={true} className="w-64 h-64 mx-auto" />
      <h1 className="text-2xl font-bold mb-6 text-center">
        Update Book
        </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "published_year", "isbn", "price"].map((field) => (
          <div key={field}>
            <label className="block font-medium text-gray-700 capitalize">
              {field.replace("_", " ")}
            </label>
            <input
              type={field === "price" || field === "published_year" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        ))}

        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
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
          {loading ? "Updating..." : "Update Book"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
