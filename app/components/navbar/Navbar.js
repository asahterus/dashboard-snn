import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-white max-w-5xl mx-auto sticky top-0 z-10">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl text-warna4">
          Kelompok 2
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <Link href="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/#fitur">
              Fitur
            </Link>
          </li>
          <li>
            <Link href="/#tim">
              Tim
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
