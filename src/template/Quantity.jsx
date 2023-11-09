import React, { useState } from 'react'

export default function Quantity() {
  const [quantity,setQuantity] = useState(0); 
  function increaseQuantity(){
    setQuantiy(prevQuantity => prevQuantity+1);
  }
  function decreaseQuantity(){
    setQuantiy(prevQuantity => prevQuantity-1);
  }
  return (
    <>
        <button className="increaseQuantityButton"></button>
        <input type="number" name="QuantityNumber" id="" value={2}/>
        <button className="decreaseQuantityButton"></button>
    </>
  )
}
