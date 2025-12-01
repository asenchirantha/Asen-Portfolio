import './styles.css'
import '../styles/globals.css'
import Providers from './providers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Full-Stack Developer Portfolio - Building Digital Excellence',
  description: 'Crafting exceptional web experiences with modern technologies, creative design, and performance-driven solutions'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
