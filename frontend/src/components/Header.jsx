// import React from 'react';
// import { FaSearch, FaShoppingCart } from 'react-icons/fa';

// const Header = () => (
//     <header className="  flex justify-between items-center p-4 border-b border-gray-200">
//         <h1 className="text-xl font-bold">ECOMMERCE</h1>
//         <nav className="flex space-x-6">
//             <a href="/" className="text-gray-700 hover:text-black">Categories</a>
//             <a href="/" className="text-gray-700 hover:text-black">Sale</a>
//             <a href="/" className="text-gray-700 hover:text-black">Clearance</a>
//             <a href="/" className="text-gray-700 hover:text-black">New stock</a>
//             <a href="/" className="text-gray-700 hover:text-black">Trending</a>
//         </nav>
//         <div className="flex space-x-4">
//             <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
//             <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
//         </div>
//     </header>
// );

// export default Header;
import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
        <div className="flex justify-between items-center px-10 py-2 h-[50px]">
            {/* Right corner links */}
            <div className="flex space-x-4 absolute top-2 right-8 text-gray-700 text-sm">
                <a href="/" className="hover:text-black">Help</a>
                <a href="/" className="hover:text-black">Orders & Returns</a>
                <a href="/" className="hover:text-black">Hi, John</a>
            </div>
        </div>
        
        <div className="flex justify-between items-center px-8 py-4 h-[60px]">
            {/* Left Section - Logo */}
            <h1 className="text-2xl font-bold">ECOMMERCE</h1>
            
            {/* Middle Section - Navigation Links */}
            <nav className="flex space-x-8 text-gray-700">
                <a href="/" className="hover:text-black">Categories</a>
                <a href="/" className="hover:text-black">Sale</a>
                <a href="/" className="hover:text-black">Clearance</a>
                <a href="/" className="hover:text-black">New stock</a>
                <a href="/" className="hover:text-black">Trending</a>
            </nav>

            {/* Right Section - Icons */}
            <div className="flex items-center space-x-4">
                <FaSearch className="text-gray-700 hover:text-black cursor-pointer" />
                <FaShoppingCart className="text-gray-700 hover:text-black cursor-pointer" />
            </div>
        </div>
    </header>
);

export default Header;

