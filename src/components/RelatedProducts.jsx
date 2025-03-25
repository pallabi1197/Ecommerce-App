import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {
  
const {products} = useContext(ShopContext);
const[relatedProducts, setRelatedProducts] = useState([]);

useEffect(() => {

if(products.length > 0){

let productCopy = products.slice();

productCopy = productCopy.filter((item) => category === item.category)
productCopy = productCopy.filter((item) => subCategory === item.subCategory)

}

}, [products])


return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
