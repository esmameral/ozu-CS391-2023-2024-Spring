import Link from "next/link"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header><h1>My Header</h1>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pages/about">About</Link></li>
              <li><Link href="/pages/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <h1>My Footer</h1>
        </footer>
      </body>
    </html>
  )
}