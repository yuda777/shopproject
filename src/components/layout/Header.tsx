import { Icons } from "@/components/icons"
import { CartSheet } from "@/components/cart/cart-sheet"
import Link from 'next/link'
import SideNav from '@/components/layout/SideNav'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Menu from '../Menu'
interface HeaderProps {

}

// const Header: FC<HeaderProps> = ({ }) => {
const Header = ({ }: HeaderProps) => {
  return (
    <header className="flex border-b border-abu h-16">
      <Link href={'#'} className='lg:hidden block mx-2'>
        <Sheet>
          <SheetTrigger>
            <Icons.menu className='h-14 w-[18]' />
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <Menu side='left' />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Link>
      <Link href={'/search'} className='lg:hidden mx-2'>
        <Icons.search className='h-14 w-[18]' />
      </Link>
      <Link className='pl-4 flex-grow lg:grow-0 flex lg:w-1/4 items-center justify-center lg:justify-start' href={'/'} >
        <Icons.logo_complete className='h-12 w-28 ' />
      </Link>
      <Menu side='top' />
      <div className='flex lg:w-1/4 lg:justify-end'>
        <Link href={'/search'} className='hidden lg:block mx-2'>
          <Icons.search className='h-14 w-[18]' />
        </Link>

        <Link href={'/user'} className='mx-2'>
          <Icons.user className='h-14 w-[18]' />
        </Link>
        {/* <Link href={'/cart'} className='mx-2'>
          <Icons.cart className='h-14 w-[18]' />
        </Link> */}
        <div className="mt-2 mr-2.5">
          <CartSheet />
        </div>
      </div>

    </header>
  )
}
export default Header