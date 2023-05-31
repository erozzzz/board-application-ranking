import { Header } from '~/src/components/Header';
import { Price } from '~/src/components/Price';
import { Advantage } from '~/src/components/Advantage';
import { Faq } from '~/src/components/Faq';
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white text-gray-50'>
        <Header />
        <Price />
        <Advantage />
        <div className='p-20'><br/><br/><br/>
        <Faq />
        </div>


       
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />coucouc



      </body>
    </html>
  )
}
