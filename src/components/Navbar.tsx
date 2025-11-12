import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.hash === path;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-xl font-medium">Анна</Link>
        
        <div className="flex gap-8">
          <Link 
            to="/about" 
            className={cn(
              "relative px-1 py-2 hover:text-primary transition-colors duration-200",
              isActive("/about") && "text-primary"
            )}
          >
            Обо мне
          </Link>
          <Link 
            to="/portfolio" 
            className={cn(
              "relative px-1 py-2 hover:text-primary transition-colors duration-200",
              isActive("/portfolio") && "text-primary"
            )}
          >
            Мои работы
          </Link>
          <Link 
            to="/#testimonials" 
            className={cn(
              "relative px-1 py-2 hover:text-primary transition-colors duration-200",
              isActive("#testimonials") && "text-primary"
            )}
          >
            Отзывы
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;