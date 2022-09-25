import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="p-4 bg-black">
            <div className='ml-8'>
                <h1 className="flex items-center">
                    <Link to="/">
                      <img src="https://upayments.com/en/wp-content/uploads/sites/4/2020/07/upay-logo-1.png" className="mr-3 h-6 sm:h-10" alt="Upayments Logo" />
                    </Link>
                </h1>
                
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar;