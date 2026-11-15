import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <Link href="/">mc-fidel</Link>
        <Link href="/About">About</Link>
        <Link href="/Product">Product</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Partners">Partners</Link>

    </div>
  )
}

export default Header