import React from 'react';
import { useRouter } from 'next/router';

export default function ProductDetails() {
    const router = useRouter()
    const { productId } = router.query
  return (
    <h1>Product details for product: {productId}</h1>
  )
}
