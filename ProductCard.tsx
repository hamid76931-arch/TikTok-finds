import React from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../utils/storage'
interface ProductCardProps {
  product: Product
  featured?: boolean
}
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  featured = false,
}) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white ${featured ? 'border-2 border-pink-500' : ''}`}
    >
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        {featured && (
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-pink-600 font-bold">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">
            AliExpress
          </span>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
