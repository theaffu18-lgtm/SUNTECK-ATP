import React from "react";
function Product(props){
    //let {name,price,brand,description,image} = props.product;

    const p = props.product;

    return(
        <div className="border p-4 rounded-lg shadow bg-white">

            <img 
            src={p.image} 
            alt={p.name}
            className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-3">
                {p.name}
            </h2>
            <h2 className="text-sm text-gray-600 mt-1">
                {p.description}
            </h2>
            
            
            

            <p>Brand : {p.brand}</p>

            <p className="text-sm text-gray-600">
                {p.description}
            </p>


            <h3 className="text-green-600 font-bold mt-2">
                Price : ${p.price}
            </h3>

        </div>
    )
}

export default Product;