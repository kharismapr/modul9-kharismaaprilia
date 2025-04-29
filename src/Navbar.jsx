import Home from './assets/home.svg';
import Profile from './assets/profile.svg';
import Contact from './assets/contact.svg';

export default function Navbar() {
  return (
    <nav className="bg-mainBlue text-white p-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Nama */}
        <div className="flex items-center space-x-4 ml-2">
          <img src={Profile} alt="Profile" className="h-6 w-6" />
          <h1 className="text-base md:text-lg font-bold">Kharisma Aprilia</h1>
        </div>

        {/* Menu Icons */}
        <ul className="flex items-center space-x-6 text-xs md:text-sm font-medium mr-2">
          <li className="flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105">
            <a href="#home" className="flex flex-col items-center">
              <img src={Home} alt="Home" className="h-6 w-6 mb-1" />
              Home
            </a>
          </li>
          <li className="flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105">
            <a href="#profile" className="flex flex-col items-center">
              <img src={Profile} alt="Profile" className="h-6 w-6 mb-1" />
              Profile
            </a>
          </li>
          <li className="flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105">
            <a href="#contact" className="flex flex-col items-center">
              <img src={Contact} alt="Contact" className="h-6 w-6 mb-1" />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
