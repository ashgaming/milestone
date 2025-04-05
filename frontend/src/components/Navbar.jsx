import { Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { primary_text_color, primary_text_gradient, secondary_text_color, temp_text_color } from '../theme/text.style';

export function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? primary_text_color : "text-white ";
  };

  return (
    <header className="fixed w-full max-w-screen top-0 z-50 glass-effect border-b border-slate-700/50 backdrop-blur-md">
      <nav className="container m-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src={`https://res.cloudinary.com/dyka5knvr/image/upload/v1743830824/WhatsApp_Image_2025-04-04_at_14.17.20_oa9ufm.jpg`}
            className='w-10 aspect-square rounded-full border border-solid border-orange-400'
            alt='' loading='lazy' />
            <span className={`${primary_text_gradient} font-bold bg-clip-text`}>Milestone</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/projects" className={`transition-colors ${isActive('/projects')}`}>Projects</Link>
            <Link to="/about" className={`transition-colors ${isActive('/about')}`}>About</Link>
            <Link to="/careers" className={`transition-colors ${isActive('/careers')}`}>Careers</Link>
            <Link to="/contact" className={`transition-colors ${isActive('/contact')}`}>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}