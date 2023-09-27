import "@/app/globals.css"
import { FC } from 'react'
import Main from '@/components/Main'


interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return (
    <div className=''>
      <Main />
    </div >

  )
}
export default page