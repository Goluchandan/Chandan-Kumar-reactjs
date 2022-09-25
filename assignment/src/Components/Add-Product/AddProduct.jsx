import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [developerEmail, setDeveloperEmail] = useState("");

  const handleSubmit = (event) => {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzNTA3NTI5OUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vR29sdWNoYW5kYW4iLCJpYXQiOjE2NjQwMjAwMTEsImV4cCI6MTY2NDQ1MjAxMX0.w5N-k7rk-Scb4_QzkLUV-AYWInpMzXdE30YAChIrtXE";

    const payload = {
      name: name,
      price: price,
      category: category,
      description: description,
      avatar: avatar,
      developerEmail: developerEmail,
    };

    event.preventDefault();
    axios.post(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    navigate('/')
  };

  return (
    <div className="bg-orange-200 w-[40%] m-auto rounded-2xl p-[40px] mt-8">
      <h1 className=" font-semibold  mb-4 font-extrabold text-center text-blue-600  md:text-2xl lg:text-4xl">
        CREATE PRODUCT
      </h1>

      <form onSubmit={handleSubmit} className="m-auto w-[100%] ">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] mt-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="text"
          placeholder="Enter the Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="number"
          placeholder="Enter the Price"
          name="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="category"
          placeholder="Enter the Category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="text"
          placeholder="Enter the Description"
          name="descrption"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="text"
          placeholder="Enter the Avatar"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <br />

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold text-xl"
          type="email"
          placeholder="Enter the Developer Email"
          name="email"
          value={developerEmail}
          onChange={(e) => setDeveloperEmail(e.target.value)}
        />
        <br />

        <button
          className="focus:outline-none text-white bg-green-700  font-medium rounded-lg text-sm px-2 w-[100%] text-xl py-1 mr-2 mb-2 dark:bg-green-600  "
          type="submit"
        >
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
