import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Seo } from './Seo'
import { FloatingSupport } from './FloatingSupport'

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Seo />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingSupport />
      <ScrollRestoration />
    </div>
  )
}
