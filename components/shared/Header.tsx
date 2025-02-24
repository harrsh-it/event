import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex item-center justify-between'>
            <Link href="/" className='w-36'>
                <Image 
                src="/assets/images/logo.svg" width={128} height={38}
                alt="Logo" 
                />
            </Link>
        </div>
    </header>
  )
}

export default Header