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
    <div className="flex justify-center gap-5">
      <div>
        <form className="form mx-auto" onSubmit={handleSubmit}>
          <p className="title">Add an Item</p>
          <p className="message text-black">Add an item to the shop.</p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="number"
                placeholder="Product ID"
                required
                name="id"
                value={formData.id}
                onChange={handleChange}
              />
              <span>Product ID</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder="Category"
                required
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <span>Category</span>
            </label>
          </div>

          <label>
            <input
              className="input"
              type="text"
              placeholder="Title"
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <span>Title</span>
          </label>

          <label>
            <input
              className="input"
              type="number"
              placeholder="Amount"
              required
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <span>Amount</span>
          </label>

          <label>
            <input
              className="input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <span>Upload Image</span>
          </label>

          <label>
            <textarea
              className="input input2"
              placeholder="Description"
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            <span>Description</span>
          </label>

          <button type="submit" className="submit mt-10">
            Add to Shop
          </button>
        </form>
      </div>
      <div className="form container">
        <p className="title mx-auto">Inventory</p>
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
