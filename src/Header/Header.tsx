import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export type HeaderProps = {
  isMenuOpen: boolean;
  onMenuToggle: React.DOMAttributes<
    HTMLButtonElement | HTMLAnchorElement
  >["onClick"];
};

export default function Header({ isMenuOpen, onMenuToggle }: HeaderProps) {
  return (
    <header className="Header">
      <nav className="Header_navigation">
        <a href="/">
          <img
            src="/Logo.svg"
            alt="LiveSupp"
            className="Header_navigation_logo"
          />
        </a>
        <div className="Header_aside">
          <button
            className={clsx(
              "Header_burger",
              isMenuOpen && "Header_burger__active"
            )}
            onClick={onMenuToggle}
          >
            ☰
          </button>
          <div
            className={clsx("Header_menu", isMenuOpen && "Header_menu__open")}
          >
            <div className="Header_menu_content">
              <Link onClick={onMenuToggle} to="/">
                Úvod
              </Link>
              <Link onClick={onMenuToggle} to="/use-case">
                Použití
              </Link>
              <Link onClick={onMenuToggle} to="/training">
                Poradenství
              </Link>
              <Link onClick={onMenuToggle} to="/features">
                Ceník
              </Link>
              <Link onClick={onMenuToggle} to="/contact">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
