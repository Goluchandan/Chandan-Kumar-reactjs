import React, { useState } from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";


const Favorites = () => {
  
  const StorageItems = () => {
      let listItems = localStorage.getItem("favorite");
      // console.log(listItems)
   
      if(listItems){
         return JSON.parse(localStorage.getItem("favorite"))
      }
      else{
         return [];
      }
  }

    const [items , setItems] = useState(StorageItems());


    const handleDelete = (id) => {
      const filtered = items.filter((elem) => elem._id !== id);
      localStorage.setItem("favorite" , JSON.stringify(filtered));
      window.location.reload();
    }
    
    return (
      <>  
        <h1 className="mt-5 text-3xl font-bold text-yellow-500 font-mono">YOUR WISHLIST PRODUCTS ARE HERE</h1>
        <div className="inline-grid grid-cols-3 gap-5 w-[95%] m-auto mt-7">
        {
          items.map((elem,index) => {
            return (
              <div key={elem._id} className="border-4 border-4 hover:shadow-lg shadow-stone-900 border-gray-300 rounded-2xl bg-gray-200 cursor-pointer " >
                 <div className="flex justify-center"> 
                   <img src={elem.avatar} alt="products" className="h-[250px] rounded-2xl w-[80%] mt-4"/>
                 </div>
                 <div className="flex justify-evenly">
                 <h2 className="text-2xl font-bold text-red-900 mt-4 ml-[30%]">{elem.name}</h2>
                 <button className="text-3xl text-red-600 ml-10 hover:text-red-700 bg-green-100 hover:bg-orange-200 h-[40px] mt-3 w-[50px] pl-[10px]" onClick={() => handleDelete(elem._id)} ><RiDeleteBin6Fill /></button>
                 </div>
                 <div className=" flex ">
                 <h2 className="text-2xl font-bold text-red-500 mt-4  mb-4 w-[100%]  text-center">{`Price ₹${elem.price}`} </h2>
                 </div>
                 
                 <h2 className="text-2xl font-bold text-blue-900 mt-4  mb-4 w-[100%] ">{`Category :- ${elem.category}`} </h2>
                  
                
                 <h2 className="text-2xl font-bold text-sky-600 mt-4 mb-4">{elem.developerEmail}</h2>
              </div>
            )
          })
        }
     </div>
    </> 
  )
}

export default Favorites