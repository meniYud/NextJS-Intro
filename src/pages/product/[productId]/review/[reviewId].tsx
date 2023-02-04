import React from 'react';
import { useRouter } from 'next/router';

export default function ProductReview() {
    const router = useRouter()
    const { productId, reviewId } = router.query
  return (
    <h1>Product Review ({reviewId}) for product: {productId}</h1>
  )
}
