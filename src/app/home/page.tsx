import Header from '@/components/layout/Header'
import "@/app/globals.css"
import { FC } from 'react'
import Main from '@/components/Main'
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Shell } from '@/components/shells/shell'
import { AddToCartForm } from '@/components/forms/add-to-cart-form'


interface pageProps {

}

const images = [
  { "id": "1", "name": "", "url": "/Weapon_Shield_002.jpg", },
  { "id": "2", "name": "", "url": "/Weapon_Shield_003.jpg", },
  { "id": "3", "name": "", "url": "/Weapon_Shield_004.jpg", },
  { "id": "4", "name": "", "url": "/Weapon_Shield_005.jpg", },
  { "id": "5", "name": "", "url": "/Weapon_Shield_006.jpg", },
  { "id": "5", "name": "", "url": "/Weapon_Shield_007.jpg", },
  { "id": "5", "name": "", "url": "/Weapon_Shield_008.jpg", },
  { "id": "5", "name": "", "url": "/Weapon_Shield_009.jpg", },
];

const page: FC<pageProps> = ({ }) => {
  return (
    <div className=''>
      <Header />
      <Main />
      <AddToCartForm productId={4} />
      <Shell>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          <ProductImageCarousel
            className="w-full md:w-1/2"
            images={images ?? []}
          />
        </div>
      </Shell>
    </div >

  )
}
export default page