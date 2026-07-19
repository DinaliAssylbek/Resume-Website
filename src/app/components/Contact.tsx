import React from 'react'

const Contact = () => {
  return (
   <section id="contact" className="scroll-mt-24 py-5 mr-page ml-10 border border-[var(--neutral)]/20 p-6 my-4" style={{backgroundColor: "#141b2e"}}>
        <h3 className='text-white mb-2 font-bold'>
            Contact Info
        </h3>
        <p className='text-white/60'>
            Have a suggestion on how to improve this website? 
        </p>
        <a
            href="mailto:dinali.assylbek.2003@gmail.com"
            className="mt-4 inline-flex items-center bg-white px-10 py-2 text-sm font-medium text-[var(--darker)] hover:opacity-90"
        >
            Email me
        </a>
   </section>
  )
}

export default Contact