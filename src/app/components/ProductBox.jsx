import React from 'react'
import styles from "@/styles/ProductBox.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function ProductBox({ product }) {
    console.log(product);

  return (
    <div className={`${styles.card} bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between`}>
      <Link href={"/store/product-details/" + product.id}>
        <div className="relative w-full h-48 overflow-hidden rounded-md">
          <Image 
            src={product?.thumbnail}
            alt={product.title || "Product Image"} 
            width={300} 
            height={150}
            className={`${styles.productImage} w-full h-full object-contain hover:scale-105 transition-transform duration-300`} 
          />
        </div>
      </Link>

      <div className="mt-4">
        {/* line-clamp-2 se title 2 lines se zyada bada nahi hoga aur layout clean rahega */}
        <h3 className="text-sm min-h-[40px] font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-900 font-bold mt-2">
          ${product.price}
        </p>
        <button className="w-full mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  )
}
