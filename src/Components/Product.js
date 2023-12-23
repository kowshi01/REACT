import React, { useState } from 'react'

const Product = () => {

    const [proId,setProId]=useState('');
    const [sellPrice,setSellPrice]=useState('');
    const[productName,setProductName]=useState('');
    const [categ,setCateg]=useState('');

    const productIdHandler=(e)=>{
        setProId(e.target.value)        
    }
    const sellPriceHandler=(e)=>{
        setSellPrice(e.target.value)        
    }
    const productNameHandler=(e)=>{
        setProductName(e.target.value)        
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const obj={id:proId , price:sellPrice , proname:productName, category:categ}
        localStorage.setItem(obj.id , JSON.stringify(obj))
       
        if(obj.category==='electronics'){
            document.getElementById('electronics').innerHTML=`<li>${obj.price} - ${obj.proname} - ${obj.category} <button>Delete</button></li>`
        }else if(obj.category==='fooditems'){
            document.getElementById('fooditems').innerHTML=`<li>${obj.price} - ${obj.proname} - ${obj.category} <button>Delete</button</li>`
        }else{
            document.getElementById('skincare').innerHTML=`<li>${obj.price} - ${obj.proname} - ${obj.category} <button>Delete</button</li>`
        }
    }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <label htmlFor='product_id'>Product Id : </label>
        <input type="number" id='productid' value={proId.value} onChange={productIdHandler}/>
        <label htmlFor='Selling_price'>Selling Price : </label>
        <input type="text" id='sellingprice'value={sellPrice.value} onChange={sellPriceHandler}/>
        <label htmlFor='product_name'>Product Name : </label>
        <input type="text" id='productname'value={productName.value} onChange={productNameHandler}/>
        <label htmlFor='category'>Choose a category : </label>
        <select onClick={e=>setCateg(e.target.value)}>
            <option value='skincare'>SkinCare</option>
            <option value='fooditems'>Food Items</option>
            <option value='electronics'>Electronic Items</option>
        </select>
        <button>Add Product</button>         
    </form>

    <div>
        <h2>Products</h2>
        <h3 >Electronic Items</h3>
        <ul id='electronics'></ul>
        <h3>SkinCare Items</h3>
        <ul id='skincare'></ul>
        <h3>Food Items</h3>
        <ul id='fooditems'></ul>
    </div>
    </div>
  )
}

export default Product