'use client';

import './Navbar.scss';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@/public/logo.jpg';
import Image from 'next/image';

export default function Navbar() {
  const navbarRef = useRef();

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = function () {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // MenuBar
    const clickHandler = function (event) {
      if (!navbarRef.current) return;

      if (navbarRef.current.contains(event.target)) return;

      if (event.target.classList.contains('menu-bar-div')) return;

      setShowNav(false);
    };

    document.addEventListener('click', clickHandler, true);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  const activeNav = showNav ? 'active' : '';

  // CLOSE MENU BAR(NAVLIST BAR)
  const closeBar = function () {
    setShowNav((isactive) => (isactive ? !isactive : isactive));
  };

  return (
    <nav ref={navbarRef} className={`navbar ${activeNav}`}>
      <div className="navbar-logo">
        <Link href="/">INSIDER</Link>
      </div>

      <ul className={`nav-list ${activeNav}`}>
        <div className="nav-list-div">
          <li onClick={() => closeBar()}>
            <Link href="/">
              <div>Home</div>
            </Link>
          </li>
          <li onClick={() => closeBar()}>
            <Link href="/info">
              <div>Info</div>
            </Link>
          </li>
          <li onClick={() => closeBar()}>
            <Link href="/contact">
              <div>Contact</div>
            </Link>
          </li>
        </div>
      </ul>

      <div className={`menu-bar ${activeNav}`} onClick={handleShowNav}>
        <span className="menu-bar-div"></span>
        <span className="menu-bar-div"></span>
        <span className="menu-bar-div"></span>
      </div>
    </nav>
  );
}
