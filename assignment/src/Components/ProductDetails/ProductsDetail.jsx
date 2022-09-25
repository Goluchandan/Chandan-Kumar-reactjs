import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const getLocalStorageItems = () => {
  let favouriteItems = localStorage.getItem("favorite");
  // console.log(favouriteItems);

  if (favouriteItems) {
    return JSON.parse(localStorage.getItem("favorite"));
  } else {
    return [];
  }
};

const ProductsDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(false);
  const [favouriteProduct, setFavouriteProduct] = useState(
    getLocalStorageItems()
  );

  useEffect(() => {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzNTA3NTI5OUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vR29sdWNoYW5kYW4iLCJpYXQiOjE2NjQwMjAwMTEsImV4cCI6MTY2NDQ1MjAxMX0.w5N-k7rk-Scb4_QzkLUV-AYWInpMzXdE30YAChIrtXE";

    fetch(`https://upayments-studycase-api.herokuapp.com/api/products/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json.product);
        setLoading(false);
      });
  }, [id]);

  // console.log(data);

  const handlefavourite = () => {
    setFavourite(true);
    setFavouriteProduct([...favouriteProduct, data]);
  };

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favouriteProduct));
  }, [favouriteProduct]);

  // console.log(favouriteProduct);

  return loading ? (
    <div className=" flex justify-center h-full item-center">
      <img
        src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340"
        alt="Loading..."
      />
    </div>
  ) : (
    <>
      <div className=" flex justify-left">
        <Link
          to="/Favorites"
          className="mt-10 h-[45px] w-[20%] ml-[5%] text-2xl p-[5px]  text-white rounded-xl bg-green-500"
        >
          GO TO FAVOURITE ❤️ ({favouriteProduct.length})
        </Link>
      </div>

      <div className=" flex w-[50%] h-[400px] rounded-3xl justify-center bg-red-200 p-2 m-auto mt-10">
        <div className="w-[50%]">
          <img
            src={data.avatar}
            alt="productImage"
            className=" h-[100%] w-[100%] rounded-3xl "
          />
        </div>
        <hr />
        <div className="w-[50%] grid justify-center pl-2 pr-2 ">
          <h2 className="text-3xl font-bold text-black-900 mt-10 h-[20px] ">
            {data.name}
          </h2>

          <h2 className="text-2xl h-[30px] item-center font-bold text-red-900 mb-4 text-center p-2">
            {`Price :- ₹${data.price}`}{" "}
          </h2>
          <h1
            className="text-4xl h-[50px] mt-[-20px] bg-green-200  item-center hover:cursor-pointer "
            onClick={handlefavourite}
          >
            {favourite ? (
              <span className="flex text-2xl font-bold text-blue-500  ml-[50px]  text-center p-2">
                {" "}
                Added in Favorites{" "}
                <BsHeartFill className="text-red-500 mt-2 ml-6" />{" "}
              </span>
            ) : (
              <span className="flex text-2xl font-bold text-green-900 mb-4 ml-[55px]  text-center p-2">
                {" "}
                Add To Favorites <BsHeart className="mt-2 ml-6" />{" "}
              </span>
            )}
          </h1>

          <h2 className="text-2xl h-[35px] font-bold text-blue-900 mt-[-20px]  mb-4">
            {`Category :- ${data.category}`}{" "}
          </h2>
          <h2 className="text-1xl h-[30px] font-bold text-blue-900 truncate ... mt-[-30px] mb-4 ">{`DeveloperEmail :- ${data.developerEmail}`}</h2>

          <h2 className="text-1xl text-blue-900 mt-[-40px] truncate ... mb-4 ">{`Description :- ${data.description}`}</h2>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
