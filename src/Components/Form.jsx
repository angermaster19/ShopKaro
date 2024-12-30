import React, { useEffect, useState } from "react";
import "./Home.css";
import { Card2 } from "./Card2";

export function Form() {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    title: "",
    amount: "",
    description: "",
    image: null, // To store image file or Base64 string
  });

  const [inventory, setInventory] = useState([]);

  // Function to handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle image input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result, // Store Base64 string of the image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.id ||
      !formData.category ||
      !formData.title ||
      !formData.amount ||
      !formData.description ||
      !formData.image
    ) {
      alert("All fields, including an image, are required!");
      return;
    }

    // Store data in localStorage
    localStorage.setItem(formData.id, JSON.stringify(formData));
    alert("Item added to shop!");

    // Reset form data
    setFormData({
      id: "",
      category: "",
      title: "",
      amount: "",
      description: "",
      image: null,
    });

    // Update inventory state
    loadInventory();
  };

  // Function to load inventory from localStorage
  const loadInventory = () => {
    const keys = Object.keys(localStorage);
    const items = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setInventory(items);
  };

  // Function to remove an item
  const removeItem = (id) => {
    localStorage.removeItem(id);
    loadInventory();
  };

  // Load inventory on component mount
  useEffect(() => {
    loadInventory();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 p-5">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-5 rounded-lg shadow-md">
        <form className="form mx-auto min-w-20" onSubmit={handleSubmit}>
          <p className="title text-xl md:text-2xl font-semibold mb-4">Add an Item</p>
          <p className="message text-black mb-5">Add an item to the shop.</p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <label className="flex-1">
              <input
                className="input w-full"
                type="number"
                placeholder="Product ID"
                required
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <span className="block text-sm text-gray-500 mt-1">Product ID</span>
            </label>

            <label className="flex-1">
              <input
                className="input w-full"
                type="text"
                placeholder="Category"
                required
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <span className="block text-sm text-gray-500 mt-1">Category</span>
            </label>
          </div>

          <label className="w-full mb-4">
            <input
              className="input w-full"
              type="text"
              placeholder="Title"
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <span className="block text-sm text-gray-500 mt-1">Title</span>
          </label>

          <label className="w-full mb-4">
            <input
              className="input w-full"
              type="number"
              placeholder="Amount"
              required
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <span className="block text-sm text-gray-500 mt-1">Amount</span>
          </label>

          <label className="w-full mb-4">
            <input
              className="input w-full"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <span className="block text-sm text-gray-500 mt-1">Upload Image</span>
          </label>

          <label className="w-full mb-4">
            <textarea
              className="input w-full"
              placeholder="Description"
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <span className="block text-sm text-gray-500 mt-1">Description</span>
          </label>

          <button type="submit" className="submit mt-6 w-full bg-blue-500 text-white py-2 rounded">
            Add to Shop
          </button>
        </form>
      </div>

      {/* Inventory Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <p className="title text-xl md:text-2xl font-semibold mb-4">Inventory</p>
        <div className="flex flex-wrap justify-start gap-3">
          {inventory.map((item) => (
            <Card2
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              remove={() => removeItem(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
