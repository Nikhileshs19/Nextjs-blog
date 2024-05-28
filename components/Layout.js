// components/Layout.js
import '../styles/globals.css'

export default function Layout({ children }) {
  return (
    <div>
      <header className="py-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </div>
      </header>
      <main className="container mx-auto my-8">{children}</main>
      <footer className="py-4 border-t">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2024 My Blog</p>
        </div>
      </footer>
    </div>
  )
}
