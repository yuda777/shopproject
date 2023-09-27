// 'use client'
import Image from 'next/image';
import { Header } from "@/components/HeadPage"
import { products } from "@/db/schema"
import { Products } from "@/components/Products"
import { Shell } from "@/components/shells/shell"
import { getProductsAction } from "@/app/_actions/products"
import { getStoresAction } from "@/app/_actions/store"


// import EmblaCarousel from './EmblaCarousel2';
import Carousel from '@/components/carousel/Carousel';

// const images = [
//   "/a1.jpg",
//   "/a2.jpg",
//   "/a3.jpg",
//   "/a4.jpg",
//   "/a5.jpg",
// ];

const images = [
  { "id": "1", "name": "", "url": "/b1.jpg", },
  { "id": "2", "name": "", "url": "/b2.jpg", },
  { "id": "3", "name": "", "url": "/b3.jpg", },
  { "id": "4", "name": "", "url": "/b4.jpg", },
  { "id": "5", "name": "", "url": "/b5.jpg", },
];

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Main({ }) {

  const limit = 8
  const offset = 0

  const productsTransaction = await getProductsAction({
    limit,
    offset,
    sort: null,
    categories: null,
    subcategories: null,
    price_range: null,
    store_ids: null,
  })

  const pageCount = Math.ceil(productsTransaction.total / limit)

  // Stores transaction
  const storesLimit = 25
  const storesOffset = 0

  const storesTransaction = await getStoresAction({
    limit: storesLimit,
    offset: storesOffset,
    sort: "productCount.desc",
  })

  const storePageCount = Math.ceil(storesTransaction.total / storesLimit)

  return (
    <div>
      <div className="mx-auto">
        <Carousel images={images} loop />
      </div>
      <Shell>
        <Header
          title="Products"
          description="Buy products from our stores"
          size="sm"
        />
        <Products
          products={productsTransaction.items}
          pageCount={pageCount}
          categories={Object.values(products.category.enumValues)}
          stores={storesTransaction.items}
          storePageCount={storePageCount}
        />
      </Shell>

    </div>
  )
}
