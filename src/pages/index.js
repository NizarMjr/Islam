import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Welcome from '@/components/Welcome'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Welcome /> */}
      <Content />
      <Footer />
    </main>
  )
}
