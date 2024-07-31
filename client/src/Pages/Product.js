import React, { useContext, useEffect, useState } from 'react'
//import Breadcrums from '../components/BreadCrums/BreadCrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'




const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const [product,setProduct] = useState(false);

  useEffect(()=>{
    setProduct(products.find((e)=>e.id === Number(productId)))
  },[products,productId])

  return product ? (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts id={product.id} category={product.category}/>
    </div>
  ) : null
}

export default Product