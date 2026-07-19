import React from 'react'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const

const Header = () => {
  return (
    <header className='flex px-20 py-5 bg-white justify-between items-center'>
        <h1 className='font-bold text-2xl text-[var(--primary)]'>
            Dinali Assylbek
        </h1>
        <nav className='flex flex-wrap gap-6' aria-label='Page sections'>
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className='text-[var(--neutral)] hover:text-[var(--primary)]'
                >
                    {link.label}
                </a>
            ))}
        </nav>
    </header>
  )
}

export default Header
