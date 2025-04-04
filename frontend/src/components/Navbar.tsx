import { Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-emerald-400" : "text-white hover:text-emerald-400";
  };

  return (
    <header className="fixed w-full z-50 glass-effect border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">Milestone</span>
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