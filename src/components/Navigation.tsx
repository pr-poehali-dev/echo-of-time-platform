import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { PLATFORM_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={PLATFORM_CONFIG.logo}
              alt={PLATFORM_CONFIG.name}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-red-600">
              {PLATFORM_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
              >
                <Icon name={item.icon as any} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Icon
                name="Search"
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input placeholder="Поиск историй..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm">
              Войти
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Поделиться историей
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Input placeholder="Поиск..." className="mb-3" />
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    Войти
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Поделиться историей
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
