import { FC } from 'react'
import { siteConfig } from "@/config/site"
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface MenuProps {
  side?: "top" | "left"
}

const menuVariantsNav = cva(
  "lg:flex lg:space-x-12 lg:w-2/4 justify-center",
  {
    variants: {
      side: {
        top: "hidden",
        left: "",
      },
    },
    defaultVariants: {
      side: "top",
    },
  }
)
const menuVariantsLink = cva(
  "flex px-4 h-full text-sm leading-6 text-gray-500 hover:text-gray-950 hover:font-medium hover:border-orange-500 border-transparent ",
  {
    variants: {
      side: {
        top: "border-t-4",
        left: "border-l-4",
      },
    },
    defaultVariants: {
      side: "top",
    },
  }
)

const data = siteConfig.header
const Menu: FC<MenuProps> = ({ side }) => {
  return (
    <nav className={cn(menuVariantsNav({ side }))}>
      {data.map((navli, index) =>
        <Link key={index} href={navli.href} className={cn(menuVariantsLink({ side }))}>
          <div className='self-center'>
            {navli.name}
          </div>
        </Link>
      )}
    </nav>
  )
}
export default Menu