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
    <header className='flex px-page py-5 bg-white justify-between items-center'>
        <h1 className='font-bold text-2xl text-[var(--primary)]'>
            Dinali Assylbek
        </h1>
        <div className='flex items-center gap-8'>
            <nav className='hidden md:flex flex-wrap gap-6' aria-label='Page sections'>
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
            <a
                href="/DinaliAssylbek-Resume.pdf"
                className="inline-flex items-center gap-3 bg-black px-5 py-2 text-lg font-medium text-white transition-opacity hover:opacity-70"
            >
                Resume
            </a>
        </div>
    </header>
  )
}

export default Header
