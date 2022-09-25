import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNzNTA3NTI5OUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vR29sdWNoYW5kYW4iLCJpYXQiOjE2NjQwMjAwMTEsImV4cCI6MTY2NDQ1MjAxMX0.w5N-k7rk-Scb4_QzkLUV-AYWInpMzXdE30YAChIrtXE";

  const [result, setResult] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterProduct, setFilterProduct] = useState("");

  useEffect(()=>{
    fetch('https://upayments-studycase-api.herokuapp.com/api/products', {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`}
    }).then(res => res.json()).then((json) => {
      setResult(json.products);
      setLoading(false);
    });
  },[]);

  useEffect(() =>{
    fetch(" https://upayments-studycase-api.herokuapp.com/api/categories/", {
      method: "GET",
      headers: {"Authorization": `Bearer ${token}`}
    }).then((response) => response.json())
    .then((json) => {
      setCategory(json.categories);
    })
  },[])

  const handleClick = (id) => {
    // console.log(id)
    navigate(`/ProductsDetail/${id}`)
  }

  // console.log(category , result)

  return loading ? (
  <div className=" flex justify-center h-full item-center">
    <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340" alt="Loading..." />
  </div>
  ) : (
    <>
      <div className=" flex justify-between w-[95%] m-auto">
        <Link to="/AddProduct" className="mt-10 h-[45px] w-[15%] text-2xl p-[5px]  text-white rounded-xl bg-green-500">ADD PRODUCTS</Link>

        <select name="" id="" onChange={(e) => setFilterProduct(e.target.value)} className="h-[45px] p-2 border-2 border-gray-500 mt-10 w-[18%] rounded-xl  text-1xl " >
           <option value="filter">Filter Products</option>
           {
             category.map((elem,index) => {
              return(
                 <option key={elem._id} value={elem.name}>{elem.name}</option>
              )
             })
           }
        </select>
      </div>
      <div className="inline-grid grid-cols-4 gap-5 w-[90%]  m-auto mt-10">
         {
           result
          .filter((elem) => {
            if(filterProduct === "")
            {
              return elem;
            }
           else if(filterProduct === "filter")
            {
              return elem;
            }
            else{
              return elem.category === filterProduct;
            }
          })
           .map((elem,index) => {
             return (
               <div key={elem._id} className="border-2 border-4 hover:shadow-lg shadow-stone-900 border-gray-300 rounded-2xl bg-gray-200 cursor-pointer " onClick={() => handleClick(elem._id)}>
                  <div className="flex justify-center"> 
                    <img src={elem.avatar} alt="products" className="h-[250px] rounded-2xl w-[80%] mt-4"/>
                  </div>
                  <h2 className="text-2xl font-bold text-red-900 mt-4">{elem.name}</h2>
                    <h2 className="text-2xl font-bold text-red-500 mt-4  mb-4 w-[100%]  text-center">{`Price ₹${elem.price}`} </h2>
                  <h2 className="text-2xl font-bold text-blue-900 mt-4  mb-4 w-[100%] ">{`Category :- ${elem.category}`} </h2>
               </div>
             )
           })
         }
      </div>
    </>
  );
};

export default Home;
