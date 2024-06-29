import { Antonio, Fira_Code } from 'next/font/google'

export const tony = Antonio({
  subsets: ['latin'],
  display: 'swap',
})

export const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})
import './globals.scss'

export const metadata = {
  title: 'Madcode',
  description: 'A madlib tutorial experiment',
}

const RootLayout = ({ children }) => (
  <html lang="en">
    <body className={`${tony.className} ${fira.className}`}>{children}</body>
  </html>
)

export default RootLayout
