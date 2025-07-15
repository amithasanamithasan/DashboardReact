import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const Reports = () => {

  const products = [
    {
      id: 1,
      name: "Apple MacBook Pro 17\"",
      color: "Silver",
      category: "Laptop",
      price: "$2999"
    },
    {
      id: 2,
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999"
    },
    {
      id: 3,
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99"
    },
    {
      id: 4,
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799"
    },
    {
      id: 5,
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999"
    }
  ];

  // Handler functions
  const handleEdit = (productId) => {
    console.log("Edit product with id:", productId);
  };

  const handleDelete = (productId) => {
    console.log("Delete product with id:", productId);
   
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-3">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr 
              key={product.id}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">
                {product.color}
              </td>
              <td className="px-6 py-4">
                {product.category}
              </td>
              <td className="px-6 py-4">
                {product.price}
              </td>
              <td className="px-6 py-4 flex items-center space-x-3">
                <button
                  onClick={() => handleEdit(product.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  aria-label="Edit"
                >
                  <FiEdit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  aria-label="Delete"
                >
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;