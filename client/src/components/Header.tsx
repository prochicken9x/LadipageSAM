import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="https://i.imgur.com/Fla56Yn.png"
                alt="Logo SAM GLOBAL BATTERY"
                className="h-14 object-contain mr-2"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("products", 1000);
              }}
            >
              Sản phẩm
            </a>
            <a
              href="#benefits"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("benefits", 1000);
              }}
            >
              Quyền lợi đại lý
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("about", 1000);
              }}
            >
              Giới thiệu
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("faq", 1000);
              }}
            >
              Câu hỏi thường gặp
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact", 1000);
              }}
            >
              Liên hệ
            </a>
            <a
              href="#apply"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("apply", 1000);
              }}
              className="bg-accent px-4 py-2 rounded-md text-white font-bold"
            >
              Đăng ký ngay
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-primary focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("products", 1500);
                }}
                className="text-neutral-700 hover:text-primary transition font-medium"
              >
                Sản phẩm
              </a>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("benefits", 1500);
                }}
                className="text-neutral-700 hover:text-primary transition font-medium"
              >
                Quyền lợi đại lý
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("about", 1500);
                }}
                className="text-neutral-700 hover:text-primary transition font-medium"
              >
                Giới thiệu
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("faq", 1500);
                }}
                className="text-neutral-700 hover:text-primary transition font-medium"
              >
                Câu hỏi thường gặp
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("contact", 1500);
                }}
                className="text-neutral-700 hover:text-primary transition font-medium"
              >
                Liên hệ
              </a>
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  smoothScrollTo("apply", 1500);
                }}
                className="bg-accent text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition text-center mt-2"
              >
                Đăng ký ngay
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
