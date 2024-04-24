import Link from "next/link";
export default function RootLayout({ children }) {
  return (
    <html>

      <body>
        <header><h2>My Shopping Web Application</h2></header>
        <nav>
          <ul>
            <li><Link href="/">Home</Link> </li>
            <li><Link href="/pages/About">About</Link></li>
            <li><Link href="/pages/Contact">Contact</Link></li>
          </ul>
        </nav>
        {children}
        <footer><h4>Contact us: info@myshopapp.com</h4></footer>
      </body>
    </html>
  );
}
