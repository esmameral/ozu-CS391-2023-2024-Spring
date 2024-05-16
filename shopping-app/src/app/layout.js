'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from "reactstrap";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header><h2>My Shopping Web Application</h2></header>
        <Nav> 
                <NavItem> 
                    <NavLink href="/">Home</NavLink> 
                </NavItem> 
                <NavItem> 
                    <NavLink href="/pages/about">About</NavLink> 
                </NavItem> 
                <NavItem> 
                    <NavLink href="/pages/contact">Contact</NavLink> 
                </NavItem> 
            </Nav> 
 
        {children}
        <footer><h4>Contact us: info@myshopapp.com</h4></footer>
      </body>
    </html>
  );
}
